// Goal: Modify posts query to return posts from the database
// 1. Comment out existing code
// 2. Use the correct prisma method
//    - Ignore operation arguments for now
// 3. Run the posts query on the Node.js GraphQL API i.e. in GraphQL Playground to verify it works (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Modify posts to support the query argument
// 1. Setup an object for operation arguments
// 2. If query is provided, modify the object to return only posts that have the string in title or body
// 3. Test by performing a few different queries in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Convert the comments query over to Prisma
// 1. Modify the comments query to fetch data from prisma
// 2. Modify the code to allow for relational requests when using comments query
// 3. Test by performing a few different queries in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)