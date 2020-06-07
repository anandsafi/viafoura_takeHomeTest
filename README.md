This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, upon clone or download:


### `npm install`

Install Dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Runs the test suite for the App

## Project Structure

The application is structured under the src directory.
-----
Assets folder contains:
1)  User Avatar Image
-----
Components folder contains:
1)  App(Main Wrapper component)
2)  Comment Box(Comment Parent Component)
3)  CommentText (Child component for comment text)
4)  UserAvatar (Child component for user avatar image)
5)  UserType(Child component for user specific information)
6)  ReplyBar(Child component for interactive reply functionality)
7)  Styles directory for component specific styles
-----
Configurations folder contains:
1)  Comment Level Configuratin Data
-----
Tests folder contains:
1)  Spec file for test scenarios
-----

## Functionality

The application supports the following key features:
1) Ability to render a comment component from config data
2) Ability to pass data downstream to child components and render each child component
3) Ability to interact with upvote and downvote reply functionality
4) Ability to make lighter elements visibly darker on hover
5) Ability to display a user avatar image

## Error Handling

The component component accounts for an edge case when no config data is available 

## Technical Choices + Enhancements

- The application has been built using a combination of class based and functional-based(App.jsx) component approaches to demonstrate conceptual knowledge. 
- Tests have been added to demonstrate TDD mindset and ability to write specs
- A future extension for the above approach would be to leverage axios/ fetch for defining the endpoints and getting comment data from a DB and user avatar images from a CDN/ AWS S3 bucket
- Styling has been kept to minimal to emphasize of simplicity and demosntrating clear UI as per requirement. It can easily be extended with animations and more visual appeal with the help of a designer.