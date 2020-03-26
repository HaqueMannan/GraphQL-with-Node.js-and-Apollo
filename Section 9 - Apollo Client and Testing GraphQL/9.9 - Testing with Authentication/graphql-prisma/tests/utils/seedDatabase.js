import prisma from '../../src/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userOne = {
   input: {
      name: 'Anna Hope',
      email: 'a.hope@email.com',
      password: bcrypt.hashSync('password123')
   },
   user: undefined,
   jwt: undefined
};

const postOne = {
   input: {
      title: 'Test published post',
      body: 'This is a published post.',
      published: true,
   },
   post: undefined
}

const postTwo = {
   input: {
      title: 'Test draft post',
      body: '',
      published: false,
   },
   post: undefined
}

const seedDatabase = async () => {
   // Delete test data
   await prisma.mutation.deleteManyUsers();
   await prisma.mutation.deleteManyPosts();

   // Create userOne
   userOne.user = await prisma.mutation.createUser({
      data: userOne.input
   });
   userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

   // Create postOne
   postOne.post = await prisma.mutation.createPost({
      data: {
         ...postOne.input,
         author: {
            connect: {
               id: userOne.user.id
            }
         }
      }
   });

   // Create postTwo
   postTwo.post = await prisma.mutation.createPost({
      data: {
         ...postTwo.input,
         author: {
            connect: {
               id: userOne.user.id
            }
         }
      }
   });
};

export { seedDatabase as default, userOne, postOne, postTwo };