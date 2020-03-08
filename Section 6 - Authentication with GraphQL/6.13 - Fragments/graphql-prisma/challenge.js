// Goal: Limit User.posts to showing just published posts
// 1. Setup a field resolver for User posts
// 2. Setup a fragment to ensure you have the users id
// 3. Use prisma to fetch published posts where the user is the author
// 4. Test the users query to fetch posts id, title and published fields which should not return any unpublished posts in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)