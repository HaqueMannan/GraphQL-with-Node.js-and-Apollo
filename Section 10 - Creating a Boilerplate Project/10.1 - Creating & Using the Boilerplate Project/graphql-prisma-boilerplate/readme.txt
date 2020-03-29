-----------------------------------------------------------
HOW TO USE THE GRAPHQL-PRISMA-BOILERPLATE TEMPLATE PROJECT
-----------------------------------------------------------
1. Duplicate the graphql-prisma-boilerplate directory and rename the copy directory to the project's name.
2. Update the .gitignore file and uncomment the code to ensure certain directories are not pushed up to the git repository including sensitive production informations:
   node_modules/
   config/
   dist/

3. Update the PRISMA_SECRET and JWT_SECRET environment variable values to new secret values in the config/dev.env, config/test.env and config/prod.env files for your new project.

-----------------------------------------------------------
DEV & TEST ENVIRONMENT (This is the process to get the dev and test environment up and running for a new project using the boilerplate)
-----------------------------------------------------------
1. Open config/dev.env and config/test.env and update the PRISMA_ENDPOINT property values. The default$default path is already taken. We should use the project as the service name followed by a forward slash / and the stage name i.e. dev or test:
   PRISMA_ENDPOINT=http://localhost:4466/newProject/dev
   PRISMA_ENDPOINT=http://localhost:4466/newProject/test

3. Deploy Prisma to the dev and test environments for the project by running the following terminal command within the prisma directory. Run the command twice. This will go through the deployment process and setup the new service and stage. We should have the User Type created:
   ~newProject/prisma$ prisma deploy -e ../config/dev.env
   ~newProject/prisma$ prisma deploy -e ../config/test.env

4. Run npm install terminal command within the root project directory to install all dependency packages:
   ~newProject$ npm install

5. Update the .graphqlconfig file to update the endpoints property to include the service and stage name:
   "endpoints": {
      "default": "http://localhost:4466/newProject/dev"
   }

6. After step 5 has been completed run the get-schema script in the terminal within the root project directory. This will fetch the schema and auto-generate a prisma.graphql file stored within the src/generated directory:
   ~newProject$ npm run get-schema


7. Run the terminal command within the root project directory to get the test environment running. Jest might not actually run any test cases i.e. No tests found related to file changes since last commit. Press the a key on your keyboard within the terminal to force Jest to re-run the test suite. We should have 1 test suite with 5 test cases that have a passed test status.
   ~newProject$ npm run test

8. After running the test suite and everything passes shut down the test suite using the ctrl + c keys on your keyboard.

9. Run the terminal command within the root project directory to get the development environment running. Head over to http://localhost:4000 we should expect to see GraphQL Playground up and running with the updated schema i.e. 2 Queries (users(...):[Users!]! and me:User!) and 4 Mutations(createUser(...):AuthPayload!, login(...):AuthPayload, deleteUser:User! and updateUser(...):User!).
   ~newProject$ npm run dev

-----------------------------------------------------------
PRODUCTION ENVIRONMENT (This is the process to get the production environment up and running for a new project using the boilerplate)
-----------------------------------------------------------
1. Open config/prod.env and update the PRISMA_ENDPOINT property values. The default$default path is already taken. We should use the project as the service name followed by a forward slash / and the stage name i.e. prod:
   PRISMA_ENDPOINT=http://accountname-app.herokuapp.com/newProject/prod

2. Deploy Prisma to the production environments for the project by running the following terminal command within the prisma directory. This will go through the deployment process and setup the new service and stage to our backend. We should have the User Type created:
   ~newProject/prisma$ prisma deploy -e ../config/prod.env

3. Deploy our Node App using the heroku CLI. We would setup a new app, new environment variables and then push the code up. We would run the following terminal CLI commands within the root project directory. We would need to copy the prod.env vairbales when setting up the new environment variables within our new heroku app. We can confirm this has been setup using the heroku config command.
When we run heroku create command this will automatically create a remove which we can see using the terminal command git remote -v command within the root project directory. We can push to that remote our master branch:
   ~newProject$ heroku create
   ~newProject$ heroku config:set PRISMA_ENDPOINT=http://accountname-app.herokuapp.com/newProject/prod PRISMA_SECRET=supersecretpassword JWT_SECRET=nodesecret
   ~newProject$ heroku config
   ~newProject$ git commit -am "Setup newProject project"
   ~newProject$ git remove -v
   ~newProject$ git push heroku master

4. Once the deployment process is done to the production server we should be able to visit our application URL and see the production version of our newProject application. We should have our version of GraphQL Playground for our production environment Node application.

-----------------------------------------------------------
CONCLUSION:
-----------------------------------------------------------
In a matter of few minutes we have a new GraphQL project up and running using the graphql-prisma-boilerplate. From here you can add new features and test cases as you build out the GraphQL application to fit your needs.

*Important Note: newProject should be the name of your application e.g. "BookApp" project.
-----------------------------------------------------------