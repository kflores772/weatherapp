#Weather Application
This is a simple weather application

##Prerequisites
- [node](http://nodejs.org/download/)

##Setup
1. `npm install`
2. `npm install -g grunt-cli`, if you do not have grunt accessible globally (may require admin access)
3. `grunt`
4. `node app.js`
5. Navigate to `http://localhost:4000/` in your web browser

##Structure
- RequireJS aggregates all js files located in lib/ into weatherapp.js and is placed into public/js/
- Express creates a node server for the application to be used locally
- start.js initializes the views once the document is ready
- server.js acts as the source of information and faux database, which makes the XHR calls
- The Backbone model cityData.js obtains the information from server.js and provides it to the Backbone views
- The two views provide dynamic responses to the main index.html by altering their respective templates (Underscore.js)
- Core styling is done with Bootstrap

##Author
Kristoffer Flores

##Inspiration
[BlackBerry WebWorks GUI](https://github.com/blackberry/webworks-gui)
- Being a contributor for this repository has allowed me to learn various frameworks used for building web apps
