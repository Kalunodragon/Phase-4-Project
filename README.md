# Phase 4 Game List

This is the Phase 4 project for Andrew Onulak!
This application uses a React frontend and a Rails API as the backend. This app is ment for users to be able to track reviews on games that they may have, along with the ability to see reviews left by others.

## Information

The app should load up on the main page, this page should give a breif overview of the app, similar to what you will find here. There is a navigation bar that will help with navigation on the app. Without first creating an account you will be able to browse games that have already been added to the game list, as well as the reviews left on those games. To be able to create a review yourself you will need to go to the sign in page. From here you can create an account and in turn you will be able to create reviews as well as add games to the list. You personal reviews will show up inside a colored box in the review section of the games. From here you can edit, delete, or create new reviews on games. Users can also navigate to their profile and edit information on their profiles as well.

## Installation guide

- Fork and clone this project to your environment
- Navigate into the Projects Directory
- Run `bundle` & `npm install && npm start -prefix client`
- In a seperate terminal you will need to run (First time loading `rails db:create db:migrate db:seed`) and `rails s` to start up the server.

The steps above should host the app locally as well as open a browser window for it to be displayed in. Should be `http://localhost:4000/`

