import prisma from '../../src/prisma';
import bcrypt from 'bcryptjs';

const seedDatabase = async () => {
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
};

export { seedDatabase as default };