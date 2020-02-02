// Goal: Setup CREATED, UPDATED and DELETED for the comment subscription
// 1. Setup a custom payload type for the comment subscription with "mutation" and "data"
// 2. Update publish call in createComment to send back CREATED with the data
// 3. Add publish call in deleteComment using DELETED event
// 4. Add publish call in deleteComment using UPDATED event
// 5. Test the comment subscription by creating, updating and deleting a comment in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)