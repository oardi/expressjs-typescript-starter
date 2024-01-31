# Expressjs Typescript Starter

This is a simple ExpressJs Backend using Typescript and Nodemon to serve some basic CRUD Functions.
It uses mocking data placed in the folder "src/data/posts.ts".
All operations are done on the temporary data.
No Database is used as it would make this simple starter project more complicated.

## API Endpoints

-   GET "/" - returning the string 'hello expressjs typescript starter'
-   GET "/posts" - returning all posts
-   GET "/posts/:id" - returning a single post by ID
-   POST "/posts" - adding a new post by Post Data
-   PUT "/posts/:id" - updating an existing post by ID and Post Data
-   DELETE "/posts/:id" - deleting a single post by ID

## Install dependencies

run the following command in a terminal

`npm i`

## Start the Dev Server

run the following command in a terminal

`npm start`

## Postman

To test this API without a Frontend Application, simply import the collection and environment into Postman.
