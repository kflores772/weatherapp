#Weather Application
This is a simple weather application for minesense

##Prerequisites
- [node](http://nodejs.org/download/)

##Setup
1. `npm install`
2. `grunt` (if you do not have grunt accessible globally, `npm install -g grunt-cli`)
3. `node app.js`

##Structure
- requirejs aggregates all js files located in lib/ into weatherapp.js and is placed into public/js/
- start.js initializes the views during the document ready event
- server.js acts as the source of information and faux database, which makes the XHR calls
- the model cityData.js obtains the information from server.js and provides it to the views
- the two views provide dynamic responses to the main index.html by altering their respective templates
- expressjs creates a node server for the application to be used locally

##Author
Kristoffer Flores
