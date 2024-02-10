# Expressjs Typescript Starter

This is a very simple ExpressJs Backend using Typescript and Nodemon to serve some basic CRUD Functions.

It uses temporary data placed in the file "src/data/posts.ts".

All operations are done on the temporary data.

Once you restart the backend, all operations are gone.

No Database is used as it would make this simple starter project more complicated.

## API Endpoints

-   GET "/" - returning the string 'hello expressjs typescript starter'
-   GET "/posts" - returning all posts
-   GET "/posts/:id" - returning a single post by ID
-   POST "/posts" - adding a new post by Post Data
-   PUT "/posts/:id" - updating an existing post by ID and Post Data
-   DELETE "/posts/:id" - deleting a single post by ID

## Start the Dev Server

run the following command in a terminal

`npm start`

this will make run the Dev Server listening on Port 8080

## Test Dev Server

Use Postman or any other Client to test if your Dev Server is running by calling an Endpoint like

`http://localhost:8080`

this will call the first GET Call listet above - which will return 'hello expressjs typescript starter'

## Postman

To test this API without a Frontend Application, simply import the collection and environment into Postman.
