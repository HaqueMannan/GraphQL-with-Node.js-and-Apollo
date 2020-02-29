// Goal: Setup Books Review Site
// 1. Copy prisma directory and call the new directory something like prisma-review-website (You can use the duplicate extension in VS Code to assist)
// 2. Delete the docker.compose.yml file
// 3. Update the prisma.yml file endpoint to use something other than the default e.g. http://localhost:4466/reviews/default
// 4. Edit the datamodel.prisma file to only contain a User Type Definition and id field
// 5. In the terminal navigate to the new prisma directory and run the prisma deploy command
// 6. Open the browser and go to http://localhost:4466/reviews/default to view the GraphQL Playground API for the reviews site

// Update the datamodel.prisma file:
// 7. Update User Type Definition to have the following fields: id and username (all fields are non-nullable and unique)
// 8. Setup a Book Type Definition with the following fields: id, title, author and isbn (all fields are non-nullable)
// 9. Setup a Review Type Definition with the following fields: id, text and rating (id and ratings are non-nullable while the text field is optional)
// 10. Create a relationship between Book and Review Types (reviews and book fields)
// 11. Create a relationship between Review and User Types (author and reviews fields)

// Deploy and Test:
// 12. Deploy the application using prisma deploy command
// 13. Test the API in GraphQL Playground (in the browser go to localhost:4466/reviews/default):
//    - Create a book
//    - Create two users
//    - Have each user leave a review for the book
//    - Delete a user and ensure that user's review goes away
//    - Delete the book and ensure the other review goes away