import { GraphQLServer } from 'graphql-yoga';

// Demo User & Posts Data
const users = [
   { id: '1', name: 'Alice', email: 'alice@email.com', age: 24 },
   { id: '2', name: 'Barry', email: 'barry@email.com' },
   { id: '3', name: 'Carl', email: 'carl@email.com', age: 54 }
];
const posts = [
   { id: '10', title: 'GraphQL 101', body: 'Introduction to GraphQL...', published: true },
   { id: '11', title: 'GraphQL 201', body: 'Intermediate GraphQL post...', published: false },
   { id: '12', title: 'Programming Music', body: '', published: false }
];

// GraphQL Scalar Types: String, Boolean, Int, Float, ID

// Type definitions (Schema)
// ! = no null values i.e. String! returns only string values
const typeDefs = `
   type Query {
      greeting(name: String, position: String): String!
      add(numbers: [Float!]!): Float!
      grades: [Int!]!
      users(query: String): [User!]!
      me: User!
      posts(query: String): [Post!]!
      post: Post!
   }

   type User {
      id: ID!
      name: String!
      email: String!
      age: Int
   }

   type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
   }
`

// Resolvers for API (function to run on operation)
// Structure of the object mirrors the type definition above
// All resolvers are passed four arguments in a specific order of: parent, args, ctx and info
const resolvers = {
   Query: {
      greeting(parent, args, ctx, info) {
         console.log(args);

         if(args.name && args.position) {
            return `Hello, ${args.name}! You are my favourite ${args.position}.`;
         };
         return 'Hello!';
      },
      add(parent, args, ctx, info) {
         if (args.numbers.length === 0) {
            return 0;
         };

         return args.numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
         });
      },
      grades(parent, args, ctx, info) {
         return [99, 60, 78];
      },
      users(parent, args, ctx, info) {
         if (!args.query) {
            return users;
         };

         return users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
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
      posts(parent, args, ctx, info) {
         if (!args.query) {
            return posts;
         };

         return posts.filter((post) => {
            // If either variable return true add the post to the new filtered array:
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
            return isTitleMatch || isBodyMatch;

            // Alternative approach:
            // return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase());
         });
      },
      post(parent, args, ctx, info) {
         return {
            id: '001',
            title: 'GraphQL 101',
            body: 'Introduction to GraphQL!',
            published: false
         };
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