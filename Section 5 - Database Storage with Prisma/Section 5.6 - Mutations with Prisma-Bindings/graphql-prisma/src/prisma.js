import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
   typeDefs: 'src/generated/prisma.graphql',
   endpoint: 'http://localhost:4466/'
});

// 4 Properties: prisma.query, prisma.mutations, prisma.subscription and prisma.exists

// PRISMA.QUERY
// prisma.query.users(null, '{ id name email posts { id title } }').then((data) => {
//    console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, '{ id text author { id name } }').then((data)=> {
//    console.log(JSON.stringify(data, undefined, 2));
// });


// PRISMA.MUTATION & PROMISE CHAINING
// prisma.mutation.createPost({
//    data: {
//       title: "A new unpublished GraphQL post",
//       body: "",
//       published: false,
//       author: {
//          connect: {
//             id: "ck6pe2o3p01aa0886o04f1xwd"
//          }
//       }
//    }
// }, '{ id title body published }').then((data) => {
//    console.log(data);
//    return prisma.query.users(null, '{ id name posts { id title } }');
// }).then((data) => {
//    console.log(JSON.stringify(data, undefined, 2));
// });

prisma.mutation.updatePost({
   where: {
      id: "ck6xzjmh0000m08864jo5y2dn"
   },
   data: {
      body: "This is an updated body text...",
      published: true
   }
}, '{ id }').then((data) => {
   return prisma.query.posts(null, '{ id title body published }');
}).then((data) => {
   console.log(data);
});