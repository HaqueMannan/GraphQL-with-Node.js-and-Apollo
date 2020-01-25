// Goal: Setup a mutation for deleting a post and comments
// 1. Define a mutation. It should take the post id. It should return the deleted post
// 2. Define the resolver for the mutation
//    - Check if the post exists, else throw error
//    - Remove and return the post
//    - Remove all comments belonging to that post
// 3. Test by deleting a post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)
// 4. Define a mutation. It should take the comment id. It should return the deleted comment
// 5. Define the resolver for the mutation
//    - Check if the comment exists, else throw error
//    - Remove and return the comment
// 6. Test by deleting a comment in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)