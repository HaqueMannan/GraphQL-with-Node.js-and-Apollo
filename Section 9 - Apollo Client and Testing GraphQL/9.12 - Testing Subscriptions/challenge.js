// Goal: Add a test case for the post subscription
// 1. Setup the post subscription operation
// 2. Setup the subscription using the new operation
// 3. Fire off a prisma mutation that would trigger the subscription such as deleting a published post
// 4. Assert the mutation property is correct
// 5. Test the test suite (run the terminal command npm run test within the graphql-prisma directory)