// Goal: Lock down updatePost
// 1. Validate the authentication token
// 2. Check if the post exists with the post id and the correct author id
//    - Else throw and error
// 3. Test the updatePost mutation in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Lock down createComment
// 1. Validate the authentication token
// 2. Update mutation to no longer accept author id
// 3. Create comment with the authenticated user as the author
// 4. Test the createComment mutation in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Lock down updateComment and deleteComment
// 1. Validate the authentication token
// 2. Check if the comment exists with the post id and the correct author id
//    - Else throw and error
// 4. Test the updateComment and deleteComment mutations in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)