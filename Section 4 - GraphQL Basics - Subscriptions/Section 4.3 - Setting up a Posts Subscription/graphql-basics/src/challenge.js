// Goal: Create a subscription for new posts
// 1. Define "post" subscription. No arguments are necessary. Response should be a post object
// 2. Setup the resolver for post. Since there are no args, a channel name like "post" is fine
// 3. Modify the mutation for creating a post to publish the new post data
//    - Only call pubsub.publish if the post had "published" set to true
//    - Do not worry about updatePost or deletePost
// 4. Test the post subscription in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)