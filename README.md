B2W challenge

# This project can be run with Docker or available scripts:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run-script build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Run with Docker

Build image:

`docker build -t sample:dev .`

Start:

`docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev`

App is running in `http://localhost:3001/`

### Material UI

This project uses  Material UI. The default theme is at [theme.js](src/theme.js)

### Folders

The common components (Often used components) are inside common folder.

The features (Containers and pages) are inside features folder.

All actions, reducers, sagas and selectors are inside store folder.