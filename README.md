## Table of Contents
* [Available Screens]
    * [Main Screen]
    * [Result Screen]
    * [Error Screen]

## Available Screens

Following are the screens which are included in App

### `Main Screen`

This screen contains a search box with a search button. User can type any string in the search field and then presses the 'Search' button which will then fetch matching results (repositories) from GitHub using their search API.

### `Result Screen`

This screen will display the results fetched from GitHub as a result of search made by user. There is a 'Go Back' button on the bottom of results which can be used to go back to 'Main Screen'.

### `Error Screen`

This screen will be displayed when there are no results fetched from GitHub as a result of search made by user. There is a 'Go Back' button on screen which can be used to go back to 'Main Screen'.

## Importatnt Notes
* This App is built using 'create-react-native-app' package
* I have not included 'node_modules' directory in Git, do create it by running command 'yarn install' or 'npm install'
* All the code is available in App.js
* I have mainly focussed on repositories search
* App is using GitHub Search API fir fetching results
* Only the top results from GitHub Search API are displayed
* App contains only above mentioned 3 screens
* Run this project by running command 'yarn start' or 'yarn run android'
