// Does not support Subscriptions. Apollo team plan on adding subscription support to the library the near future.
// We can create our own complex client that supports subscription. We have a new getClient file which replaces this code. Instead of relying on ApolloBoost, it uses all of the libraries that apollo-boost uses behind the scenes. Therefore, the new file is going to give us what we already get from ApolloBoost but also going to setup subscriptions support.

import ApolloBoost from 'apollo-boost';

const getClient = (jwt) => {
   return new ApolloBoost({
      uri: 'http://localhost:4000',
      request(operation) {
         if(jwt) {
            operation.setContext({
               headers: {
                  Authorization: `Bearer ${jwt}`
               }
            });
         };
      }
   });
};

export { getClient as default }