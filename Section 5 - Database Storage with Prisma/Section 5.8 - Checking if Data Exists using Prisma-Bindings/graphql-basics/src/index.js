import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';

const pubsub = new PubSub();

// Setup Server
const server = new GraphQLServer({
   typeDefs: './src/schema.graphql',
   resolvers: { 
      Query,
      Mutation,
      Subscription,
      User,
      Post,
      Comment
   },
   context: {
      db,
      pubsub
   }
});

// Start Server
server.start(() => {
   console.log('The server is up and running on port 4000!');
});