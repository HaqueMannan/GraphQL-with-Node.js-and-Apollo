// Goal: Create a login mutation
// Part I - Create the mutation:
// 1. Define the mutation is schema.graphql
//    - It should accept email/password as arguments
//    - It should return AuthPayload
// 2. Define the mutation resolver method in Mutation.js with 4 arguments

// Part II - Verify email and password:
// 1. Query for the user by email. Require just the scalar fields
//    - If no user, throw an error
// 2. Verify the hashed user password by the plain text password argument
//    - If not a match throw an error

// Part III - Send back the user with aa new token:
// 1. Send back an object that matches up with AuthPayload
//    - Generate a new JWT using the same secret used in createUser
// 2. Login with an existing user and get back user details and auth token
// 3. Test the login mutation in GraphQL Playground (run the terminal command npm run start and in the browser go to localhost:4000)