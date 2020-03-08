// Goal: Allow comments on published posts only
// 1. Check if the post is published
// 2. Throw an error if it is not published
// 4. Test the createComment mutation to create a comment on a published post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)

// Goal: Delete all comments when unpublishing a post
// 1. Use exists to determine if the post is published or not
// 2. If published but about to be unpublished delete all post comments
// 4. Test the updatePost mutation to unpublish a post in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)