import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';

// Demo Users, Posts and Comments Data
let users = [
   { id: '1', name: 'Alice', email: 'alice@email.com', age: 24 },
   { id: '2', name: 'Barry', email: 'barry@email.com' },
   { id: '3', name: 'Carl', email: 'carl@email.com', age: 54 }
];
let posts = [
   { id: '10', title: 'GraphQL 101', body: 'Introduction to GraphQL...', published: true, author: '1' },
   { id: '11', title: 'GraphQL 201', body: 'Intermediate GraphQL...', published: false, author: '1' },
   { id: '12', title: 'Programming Music', body: '', published: false, author: '3' }
];
let comments = [
   { id: '100', text: 'Hello World!', author: '3', post: '10' },
   { id: '101', text: 'How are you?', author: '1', post: '12' },
   { id: '102', text: 'What are we going to learn today?', author: '2', post: '11' },
   { id: '103', text: 'Bye for now!', author: '1', post: '12' }
];

// GraphQL Scalar Types: String, Boolean, Int, Float, ID

// Type definitions (Schema)
// ! = no null values i.e. String! returns only string values
const typeDefs = `
   type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
      comments: [Comment!]!
      me: User!
      post: Post!
   }

   type Mutation {
      createUser(data: CreateUserInput!): User!
      deleteUser(id: ID!): User!
      createPost(data: CreatePostInput!): Post!
      deletePost(id: ID!): Post!
      createComment(data: CreateCommentInput!): Comment!
      deleteComment(id: ID!): Comment!
   }

   input CreateUserInput {
      name: String!, email: String!, age: Int
   }

   input CreatePostInput {
      title: String!, body: String!, published: Boolean!, author: ID!
   }

   input CreateCommentInput {
      text: String!, author: ID!, post: ID!
   }

   type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      posts: [Post!]!
      comments: [Comment!]!
   }

   type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
      comments: [Comment!]!
   }

   type Comment {
      id: ID!
      text: String!
      author: User!
      post: Post!
   }
`

// Resolvers for API (function to run on operation)
// Structure of the object mirrors the type definition above
// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
const resolvers = {
   Query: {
      users(parent, args, ctx, info) {
         if (!args.query) {
            return users;
         };

         return users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
         });
      },
      posts(parent, args, ctx, info) {
         if (!args.query) {
            return posts;
         };

         return posts.filter((post) => {
            return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase());
         });
      },
      comments(parent, args, ctx, info) {
         return comments;
      },
      me(parent, args, ctx, info) {
         return {
            id: '0123456',
            name: 'John Doe',
            email: 'j.doe@email.com',
            // age: 29
         };
      },
      post(parent, args, ctx, info) {
         return {
            id: '001',
            title: 'GraphQL 101',
            body: 'Introduction to GraphQL!',
            published: false
         };
      }
   },
   Mutation: {
      createUser(parent, args, ctx, info) {
         const emailTaken = users.some((user) => user.email === args.data.email);

         if(emailTaken) {
            throw new Error('Email taken.');
         };

         const user = {
            id: uuidv4(),
            ...args.data
         };

         users.push(user);

         return user;
      },
      deleteUser(parent, args, ctx, info) {
         const userIndex = users.findIndex((user) => user.id === args.id);

         if(userIndex === -1) {
            throw new Error('User not found.');
         };

         const deletedUsers = users.splice(userIndex, 1);

         posts = posts.filter((post) => {
            const match = post.author === args.id;

            if(match) {
               comments = comments.filter((comment) => comment.post !== post.id);
            };

            return !match;
         });

         comments = comments.filter((comment) => comment.author !== args.id);

         return deletedUsers[0];
      },
      createPost(parent, args, ctx, info) {
         const userExists = users.some((user) => user.id === args.data.author);

         if(!userExists) {
            throw new Error('User not found.');
         };

         const post = {
            id: uuidv4(),
            ...args.data
         };

         posts.push(post);

         return post;
      },
      deletePost(parent, args, ctx, info) {
         const postIndex = posts.findIndex((post) => post.id === args.id);

         if(postIndex === -1) {
            throw new Error('Post not found.');
         };

         const deletedPosts = posts.splice(postIndex, 1);

         comments = comments.filter((comment) => comment.post !== args.id);

         return deletedPosts[0];
      },
      createComment(parent, args, ctx, info) {
         const userExists = users.some((user) => user.id === args.data.author);
         // const postExists = posts.some((post) => post.id === args.post && post.published === true);
         const postExists = posts.some((post) => post.id === args.data.post && post.published);

         if(!userExists || !postExists) {
            throw new Error('Unable to find user and post');
         };

         const comment = {
            id: uuidv4(),
            ...args.data
         };

         comments.push(comment);

         return comment;
      },
      deleteComment(parent, args, ctx, info) {
         const commentIndex = comments.findIndex((comment) => comment.id === args.id);

         if(commentIndex === -1) {
            throw new Error('Comment not found.');
         };

         const deletedComments = comments.splice(commentIndex, 1);

         return deletedComments[0];
      }
   },
   Post: {
      author(parent, args, ctx, info) {
         return users.find((user) => {
            return user.id === parent.author;
         });
      },
      comments(parent, args, ctx, info) {
         return comments.filter((comment) => {
            return comment.post === parent.id;
         });
      }
   },
   Comment: {
      author(parent, args, ctx, info) {
         return users.find((user) => {
            return user.id === parent.author;
         });
      },
      post(parent, args, ctx, info) {
         return posts.find((post) => {
            return post.id === parent.post;
         });
      }
   },
   User: {
      posts(parent, args, ctx, info) {
         return posts.filter((post) => {
            return post.author === parent.id;
         });
      },
      comments(parent, args, ctx, info) {
         return comments.filter((comment) => {
            return comment.author === parent.id;
         });
      }
   }
};

// Setup Server
const server = new GraphQLServer({
   typeDefs: typeDefs,
   resolvers: resolvers
});

// Start Server
server.start(() => {
   console.log('The server is up and running on port 4000!');
});