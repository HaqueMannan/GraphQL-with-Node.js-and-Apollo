import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';

// Resolvers for API (function to run on operation)
// const resolvers = {
//    Query, Mutation, User, Post, Comment
// };

// Setup Server
const server = new GraphQLServer({
   typeDefs: './src/schema.graphql',
   // resolvers,
   resolvers: { 
      Query,
      Mutation,
      User,
      Post,
      Comment
   },
   context: {
      db
   }
});

// Start Server
server.start(() => {
   console.log('The server is up and running on port 4000!');
});