import { Prisma } from 'prisma-binding';
import { fragmentReplacements } from './resolvers/index';

const prisma = new Prisma({
   typeDefs: 'src/generated/prisma.graphql',
   endpoint: process.env.PRISMA_ENDPOINT,
   secret: 'supersecretpassword',
   fragmentReplacements
});

export { prisma as default }

// 4 Properties: prisma.query, prisma.mutations, prisma.subscription and prisma.exists

// prisma.exists.Comment({
//    id: "abc123",
//    author: {
//       id: "123abc"
//    }
// }).then((exists) => {
//    console.log(exists);
// });


// PRISMA.QUERY, MUTATIONS & ES6 ASYNC/AWAIT
// const createPostForUser = async (authorId, data) => {
//    const userExists = await prisma.exists.User({ id: authorId })

//    if(!userExists) {
//       throw new Error('User not found');
//    };

//    const post = await prisma.mutation.createPost({
//       data: {
//          ...data,
//          author: {
//             connect: {
//                id: authorId
//             }
//          }
//       }
//    }, '{ author { id name email posts { id title published } } }');
//    return post.author;
// };

// createPostForUser('ck6pe2o3p01aa0886o04f1xwd', {
//    title: "A Book to Read",
//    body: "The Art of War",
//    published: true
// }).then((user) => {
//    console.log(JSON.stringify(user, undefined, 2));
// }).catch((error) => {
//    console.log(error.message);
// });


// const updatePostForUser = async (postId, data) => {
//    const postExists = await prisma.exists.Post({ id: postId });

//    if(!postExists) {
//       throw new Error('Post not found');
//    };

//    const post = await prisma.mutation.updatePost({
//       where: {
//          id: postId
//       },
//       data
//    }, '{ author { id name email posts { id title published } } }');
//    return post.author;
// };

// updatePostForUser('ck6xzjmh0000m08864jo5y2dn', { published: false }).then((user) => {
//    console.log(JSON.stringify(user, undefined, 2));
// }).catch((error) => {
//    console.log(error.message);
// });