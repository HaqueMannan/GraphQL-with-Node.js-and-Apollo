// Goal: Setup the post subscription to work with Prisma
// 1. Update schema.graphql to use "node" as nullable instead of "data" for posts (mirror prisma schema to align what Node sends to the client)
// 2. Update the subscribe method to use the correct prisma method
//    - Limit the subscription to posts that are published using "where" argument
// 2. Test by subscribing to a post and then create a published and unpublished post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)


// Transfer of returned data from Prisma to Node and Node to Client
// Prisma --return data --> Node --return data--> Client
// It is important that the Note to Client data mirrors what Node is getting back from the Prisma subscription. Use GraphQL Playground on localhost:4466 to view Schema Document (DOCS tab) to view the subscription