//Import express, create a port we will listen to, and initialize our express app
const express = require('express'),
      port = 3000,
      path = require('path'),
      router = require('./router')
      app = express();

      //MIDDLEWARE FUNCTIONS
  app.use(express.urlencoded( {extended: false}))
  app.use(express.json())
  app.use(express.static("public")) //gives express access to public folder
  app.set("views", "views") //look for views within views
  app.set("view engine", "hbs")
  app.use("/", router) //ensures all routes are handles by express router, but we put it here because our server lives in app.js

//.listen tells us to listen to a specific port to find our server
//You can also use a callback within the listen method to display a console log or whatever

app.listen(port, () => {
  console.log("The server is now running on port 3000")
})