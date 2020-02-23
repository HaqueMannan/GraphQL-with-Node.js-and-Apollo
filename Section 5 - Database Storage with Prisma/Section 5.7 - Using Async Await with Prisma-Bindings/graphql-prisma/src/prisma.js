import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
   typeDefs: 'src/generated/prisma.graphql',
   endpoint: 'http://localhost:4466/'
});

// 4 Properties: prisma.query, prisma.mutations, prisma.subscription and prisma.exists

// PRISMA.QUERY & ES6 ASYNC/AWAIT
// prisma.query.users(null, '{ id name email posts { id title } }').then((data) => {
//    console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, '{ id text author { id name } }').then((data)=> {
//    console.log(JSON.stringify(data, undefined, 2));
// });

const createPostForUser = async (authorId, data) => {
   const post = await prisma.mutation.createPost({
      data: {
         ...data,
         author: {
            connect: {
               id: authorId
            }
         }
      }
   }, '{ id }');
   const user = await prisma.query.user({
      where: {
         id: authorId
      }
   }, '{ id name email posts { id title published } }');
   return user;
};

createPostForUser('ck6pe2o3p01aa0886o04f1xwd', {
   title: "A Book to Read",
   body: "The Art of War",
   published: true
}).then((user) => {
   console.log(JSON.stringify(user, undefined, 2));
});

const updatePostForUser = async (postId, data) => {
   const post = await prisma.mutation.updatePost({
      where: {
         id: postId
      },
      data
   }, '{ author { id } }');
   const user = await prisma.query.user({
      where: {
         id: post.author.id
      }
   }, '{ id name email posts { id title published } }');
   return user;
};

updatePostForUser('ck6xzjmh0000m08864jo5y2dn', { published: false }).then((user) => {
   console.log(JSON.stringify(user, undefined, 2));
});


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

// prisma.mutation.updatePost({
//    where: {
//       id: "ck6xzjmh0000m08864jo5y2dn"
//    },
//    data: {
//       body: "This is an updated body text...",
//       published: true
//    }
// }, '{ id }').then((data) => {
//    return prisma.query.posts(null, '{ id title body published }');
// }).then((data) => {
//    console.log(data);
// });