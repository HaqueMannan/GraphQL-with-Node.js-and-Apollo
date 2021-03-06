import { GraphQLServer } from 'graphql-yoga';

// Demo User & Posts Data
const users = [
   { id: '1', name: 'Alice', email: 'alice@email.com', age: 24 },
   { id: '2', name: 'Barry', email: 'barry@email.com' },
   { id: '3', name: 'Carl', email: 'carl@email.com', age: 54 }
];
const posts = [
   { id: '10', title: 'GraphQL 101', body: 'Introduction to GraphQL...', published: true, author: '1' },
   { id: '11', title: 'GraphQL 201', body: 'Intermediate GraphQL...', published: false, author: '1' },
   { id: '12', title: 'Programming Music', body: '', published: false, author: '3' }
];

// GraphQL Scalar Types: String, Boolean, Int, Float, ID

// Type definitions (Schema)
// ! = no null values i.e. String! returns only string values
const typeDefs = `
   type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]!
      me: User!
      post: Post!
   }

   type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      posts: [Post!]!
   }

   type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
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
   Post: {
      author(parent, args, ctx, info) {
         return users.find((user) => {
            return user.id === parent.author;
         });
      } 
   },
   User: {
      posts(parent, args, ctx, info) {
         return posts.filter((post) => {
            return post.author === parent.id;
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