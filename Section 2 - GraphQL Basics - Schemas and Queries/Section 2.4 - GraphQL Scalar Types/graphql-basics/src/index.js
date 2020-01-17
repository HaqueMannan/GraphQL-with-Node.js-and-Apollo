import { GraphQLServer } from 'graphql-yoga';

// GraphQL Scalar Types: String, Boolean, Int, Float, ID

// Type definitions (Schema)
// ! = no null values i.e. String! returns only string values
const typeDefs = `
   type Query {
      id: ID!
      name: String!
      age: Int!
      employed: Boolean!
      score: Float

      title: String!
      price: Float!
      releaseYear: Int
      rating: Float
      inStock: Boolean!
   }
`

// Resolvers for API (function to run on operation)
// Structure of the object mirrors the type definition above
const resolvers = {
   Query: {
      id() {
         return 'abc123';
      },
      name() {
         return 'Anna';
      },
      age() {
         return 24;
      },
      employed() {
         return false;
      },
      score() {
         // return null;
         return 3.5;
      },

      title() {
         return 'The Art of War!';
      },
      price() {
         return 12.99;
      },
      releaseYear() {
         return null;
      },
      rating() {
         return 3.7;
      },
      inStock() {
         return true;
      },
   }
}

// Setup Server
const server = new GraphQLServer({
   typeDefs: typeDefs,
   resolvers: resolvers
})

server.start(() => {
   console.log('The server is up and running!');
})