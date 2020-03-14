import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import prisma from './prisma';
import { resolvers, fragmentReplacements } from './resolvers/index';

const pubsub = new PubSub();

// Setup Server
const server = new GraphQLServer({
   typeDefs: './src/schema.graphql',
   resolvers,
   context(request) {
      return {
         db,
         pubsub,
         prisma,
         request
      };
   },
   fragmentReplacements
});

// Start Server
server.start(() => {
   console.log('The server is up and running on port 4000!');
});