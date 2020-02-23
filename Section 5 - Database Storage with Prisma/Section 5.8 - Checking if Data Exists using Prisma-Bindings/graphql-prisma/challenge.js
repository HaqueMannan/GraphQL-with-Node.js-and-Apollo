// Goal: Improve updatePostForUser
// 1. Use prisma.exists to verify that the post exists
//    - If there is no post with the id throw an error
// 2. Remove the unnecessary user query by updating the selection set for updatePost
// 3. Add a catch method call to catch and print errors
// 5. Test the code by running npm start in the terminal by calling the function to update an existing post and a non-existing post