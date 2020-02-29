// Goal: Wire up deleteUser to work with the Prisma database
// 1. Refactor the deleteUser mutation resolver to use prisma instead of the array data
//    - Check that a user exists with that id else throw and error. Delete and return the deleted user
//    - Do not worry about removing posts or comments. That was configured with @relation
// 3. Test by removing a user and verifying that they were deleted from the database by running the mutation in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Refactor the createPost mutation to use Prisma
// 1. Refactor createPost mutation resolver to use prisma instead of the array data
//    - Do not worry about pubsub or subscriptions
// 2. Test by creating a post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Refactor the deletePost mutation to use Prisma
// 1. Refactor deletePost mutation resolver to use prisma instead of the array data
//    - Do not worry about pubsub or subscriptions
// 2. Test by deleting a post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Refactor the updatePost mutation to use Prisma
// 1. Refactor updatePost mutation resolver to use prisma instead of the array data
//    - Do not worry about pubsub or subscriptions
// 2. Test by updating a post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Refactor the createComment mutation to use Prisma
// 1. Refactor createComment mutation resolver to use prisma instead of the array data
//    - Do not worry about pubsub or subscriptions
// 2. Test by creating a Comment in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Refactor the deleteComment mutation to use Prisma
// 1. Refactor deleteComment mutation resolver to use prisma instead of the array data
//    - Do not worry about pubsub or subscriptions
// 2. Test by deleting a Comment in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Refactor the updateComment mutation to use Prisma
// 1. Refactor updateComment mutation resolver to use prisma instead of the array data
//    - Do not worry about pubsub or subscriptions
// 2. Test by updating a Comment in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)