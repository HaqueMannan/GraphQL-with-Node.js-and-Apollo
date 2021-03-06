import { GraphQLServer } from 'graphql-yoga';

// GraphQL Scalar Types: String, Boolean, Int, Float, ID

// Type definitions (Schema)
// ! = no null values i.e. String! returns only string values
const typeDefs = `
   type Query {
      greeting(name: String, position: String): String!
      add(a: Float!, b: Float!): Float!
      me: User!
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
         }
         return 'Hello!';
      },
      add(parent, args) {
         return args.a + args.b;
      },
      me() {
         return {
            id: '0123456',
            name: 'John Doe',
            email: 'j.doe@email.com',
            // age: 29
         };
      },
      post() {
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