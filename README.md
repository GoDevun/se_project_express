# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Project Description

This server provides the API for the WTWR (What to Wear?) application. It stores users and clothing items in a MongoDB database and exposes routes to:

- Sign up with an email, password, name, and avatar (passwords are hashed before being stored)
- Sign in and receive a JSON web token that stays valid for 7 days
- Get and update the logged-in user's profile
- Get all clothing items, create new items, and delete items (users can only delete their own items)
- Like and unlike clothing items

All routes except signing up, signing in, and getting the list of items are protected by authorization middleware. The server also handles errors gracefully, returning appropriate status codes (400, 401, 403, 404, 409, 500) with descriptive JSON error messages, and never returns password hashes in responses.

## Technologies and Techniques Used

- **Node.js / Express.js** — server framework and request routing
- **MongoDB / Mongoose** — database and object modeling (schemas, models, custom static methods, and query helpers such as `orFail`)
- **bcryptjs** — password hashing
- **jsonwebtoken** — JWT-based user authorization
- **celebrate / Joi** — validation of inbound request data
- **winston & express-winston** — logging of requests and errors to `request.log` and `error.log`
- **Centralized error handling** — a single error-handling middleware with custom error constructors
- **dotenv** — environment variables for secrets in production
- **cors** — cross-origin requests from the front end
- **validator** — URL and email validation for the `avatar`, `imageUrl`, and `email` fields
- **ESLint (Airbnb base config) + Prettier** — code style and formatting
- **nodemon** — hot reload during development
- **Postman & GitHub Actions** — API testing
- **Google Cloud, nginx, PM2 & Let's Encrypt** — deployment, request routing, process management, and HTTPS

## Accessing the Application

- **Deployed back end:** https://REPLACE-WITH-YOUR-API-SUBDOMAIN
- **Deployed front end:** https://REPLACE-WITH-YOUR-DOMAIN
- **Front-end GitHub repository:** https://github.com/GoDevun/se_project_react
- **Project pitch video:** REPLACE-WITH-YOUR-VIDEO-LINK

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

`npm run lint` — to run the linter

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
