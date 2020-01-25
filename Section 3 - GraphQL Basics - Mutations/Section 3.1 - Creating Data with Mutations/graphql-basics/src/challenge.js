// Goal: Allow clients to create a new comment
// 1. Define a new createComment mutation
//    - Should take text, author and post
//    - Should return a comment
// 2. Define a resolver method for createComment
//    - Confirm that the user exists, else throw error
//    - Confirm that the post exists and is published, else throw error
//    - If they do exists, create the comment and return it
// 3. Run the mutation and add a comment in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)
// 4. Use the comments query in GraphQL Playground to verify the comment was added