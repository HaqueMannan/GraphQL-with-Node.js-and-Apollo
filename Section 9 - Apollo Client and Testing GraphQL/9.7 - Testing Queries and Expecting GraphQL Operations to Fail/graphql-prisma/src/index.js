import "@babel/polyfill/noConflict";
import server from './server';

// Start Server
server.start({ port: process.env.PORT || 4000 }, () => {
   console.log('The server is up and running!');
});