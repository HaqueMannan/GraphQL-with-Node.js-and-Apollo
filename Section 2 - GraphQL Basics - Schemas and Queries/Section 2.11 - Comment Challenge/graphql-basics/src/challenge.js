// Part I:
// 1. Setup a "Comment" custom type with id and text fields. Both non-nullable
// 2. Setup a "comments" array with four comments
// 3. Setup a "comments" query with a resolver that returns all the comments
// 4. Run a query to get all four comments with both id and text fields in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Part II:
// Goal: Setup a relationship between Comment and User
// 1. Setup an author field on Comment
// 2. Update all comments in the array to have a new author field (use one of the user ids as value)
// 3. Create a resolver for the Comments author field that returns the user who wrote the comment
// 4. Run a sample query that gets all comments and the author's name in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)
// 5. Setup a comments field on User
// 6. Setup resolver for the User comments field that returns all comments belonging to that user
// 7. Run a sample query that gets all users and all comments in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Part II:
// Goal: Setup a relationship between Comment and Post
// 1. Setup a post field on Comment
// 2. Update all comments in the array to have a new post field (use one of the post ids as value)
// 3. Create a resolver for the Comments post field that returns the post that the comment belongs to
// 4. Run a sample query that gets all comments and the post name in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)
// 5. Setup a comments field on Post
// 6. Setup resolver for the Post comments field that returns all comments belonging to that post
// 7. Run a sample query that gets all posts and all its comments in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)