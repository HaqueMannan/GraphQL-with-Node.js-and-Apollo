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

const userTwo = {
   input: {
      name: 'Tina Banks',
      email: 'tina.b@email.com',
      password: bcrypt.hashSync('myPass123')
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
};

const postTwo = {
   input: {
      title: 'Test draft post',
      body: '',
      published: false,
   },
   post: undefined
};

const commentOne = {
   input: {
      text: 'Great post. Thanks for sharing!'
   },
   comment: undefined
};

const commentTwo = {
   input: {
      text: 'I am glad you enjoyed it.'
   },
   comment: undefined
};


const seedDatabase = async () => {
   // Delete test data
   await prisma.mutation.deleteManyComments();
   await prisma.mutation.deleteManyUsers();
   await prisma.mutation.deleteManyPosts();

   // Create userOne
   userOne.user = await prisma.mutation.createUser({
      data: userOne.input
   });
   userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

   // Create userTwo
   userTwo.user = await prisma.mutation.createUser({
      data: userTwo.input
   });
   userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET);

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

   // Create commentOne
   commentOne.comment = await prisma.mutation.createComment({
      data: {
         ...commentOne.input,
         author: {
            connect: {
               id: userTwo.user.id
            }
         },
         post: {
            connect: {
               id: postOne.post.id
            }
         }
      }
   });

   // Create commentTwo
   commentTwo.comment = await prisma.mutation.createComment({
      data: {
         ...commentTwo.input,
         author: {
            connect: {
               id: userOne.user.id
            }
         },
         post: {
            connect: {
               id: postOne.post.id
            }
         }
      }
   });
};

export { seedDatabase as default, userOne, userTwo, postOne, postTwo, commentOne, commentTwo };