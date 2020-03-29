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

const seedDatabase = async () => {
   // Delete test data
   await prisma.mutation.deleteManyUsers();

   // Create userOne
   userOne.user = await prisma.mutation.createUser({ data: userOne.input });
   userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

   // Create userTwo
   userTwo.user = await prisma.mutation.createUser({ data: userTwo.input });
   userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET);
};

export { seedDatabase as default, userOne, userTwo };