# Brolly Task Server

This is a basic web server implementation using node, express and body-parser.

We have two routes:
- GET route  /policies
- POST route: /login

## Installation

We install dependencies by running in our terminal.
```terminal
npm install
```

## Web Server

We start web server by running in our terminal.
```terminal
npm start
```

## Testing

We can run our tests using mocha, chai, and request, by running in our terminal.
```terminal
npm test
```

We tested policies API for cases when user is not logged in and when user is logged in.
We used presence of token in header to determine whether user is logged in.

We tested login API for cases when user does and does not provide valid username and password.

## Project Structure

We placed out tests in ./test/test.js file. Our server is in ./index.js file, and we extracted environment settings, in this case just port, to env.json file.