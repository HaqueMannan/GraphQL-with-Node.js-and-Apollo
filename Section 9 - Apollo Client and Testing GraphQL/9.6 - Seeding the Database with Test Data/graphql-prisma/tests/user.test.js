import 'core-js';
import 'regenerator-runtime/runtime';
import 'cross-fetch/polyfill';
import ApolloBoost, { gql } from 'apollo-boost';
import prisma from '../src/prisma';
import bcrypt from 'bcryptjs';

const client = new ApolloBoost({
   uri: 'http://localhost:4000'
});

beforeEach(async () => {
   await prisma.mutation.deleteManyUsers();
   await prisma.mutation.deleteManyPosts();
   const user = await prisma.mutation.createUser({
      data: {
         name: 'Anna Hope',
         email: 'a.hope@email.com',
         password: bcrypt.hashSync('password123')
      }
   });
   await prisma.mutation.createPost({
      data: {
         title: 'Test published post',
         body: 'This is a published post.',
         published: true,
         author: {
            connect: {
               id: user.id
            }
         }
      }
   });
   await prisma.mutation.createPost({
      data: {
         title: 'Test draft post',
         body: '',
         published: false,
         author: {
            connect: {
               id: user.id
            }
         }
      }
   });
});

test('should create a new user', async () => {
   const createUser = gql`
      mutation {
         createUser(
            data: {
               name: "John Doe",
               email: "j.doe@email.com",
               password: "password123"
            }
         ) {
            token,
            user {
               id
            }
         }
      }
   `

   const response = await client.mutate({
      mutation: createUser
   });

   const exists = await prisma.exists.User({
      id: response.data.createUser.user.id
   });

   expect(exists).toBe(true);
});