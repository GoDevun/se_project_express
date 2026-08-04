# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Project Description

This server provides the API for the WTWR (What to Wear?) application. It stores users and clothing items in a MongoDB database and exposes routes to:

- Get all users, get a user by ID, and create new users
- Get all clothing items, create new items, and delete items
- Like and unlike clothing items

The server also handles errors gracefully, returning appropriate status codes (400, 404, 500) with descriptive JSON error messages.

## Technologies and Techniques Used

- **Node.js / Express.js** — server framework and request routing
- **MongoDB / Mongoose** — database and object modeling (schemas, models, and query helpers such as `orFail`)
- **validator** — URL validation for the `avatar` and `imageUrl` fields
- **ESLint (Airbnb base config) + Prettier** — code style and formatting
- **nodemon** — hot reload during development
- **Postman & GitHub Actions** — API testing

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

`npm run lint` — to run the linter

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
