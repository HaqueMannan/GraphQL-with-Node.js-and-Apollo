import { GraphQLServer } from 'graphql-yoga';

// Type definitions (Schema)
// ! = no null values i.e. String! returns only string values
const typeDefs = `
   type Query {
      hello: String!
      name: String!
      location: String!
      bio: String!
   }
`

// Resolvers for API (function to run on operation)
// Structure of the object mirrors the type definition above
const resolvers = {
   Query: {
      hello() {
         return 'This is my first Query!';
      },
      name() {
         return 'John Doe';
      },
      location() {
         return 'London'
      },
      bio() {
         return 'I live in London and love football!'
      }
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