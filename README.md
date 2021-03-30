# Ingaia test for frontend hiring

## Based on Create React App

Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Ingaia requirements for the project are [here](https://github.com/ingaia/frontend-challenge)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `yarn prettier`

This command runs prettier code formatter and saves all files with the new formatted rules.

### `yarn lint`

This command runs the linter in the src folder.

### Notes about the project

- The font in Figma "Seravek" can't be found free in the internet, thus I'm fallbacking it to "Nunito"
- The image for the characters provided by the API doesn't fit the Figma layout, there are some image distortions.
- I'm using netlify as deployment service (See netlify.toml file)
- I'm using husky for running pre-commit commands (linter, formatter, tester).
