const express = require('express')
const router = express.Router()
const controller = require('./controllers/controller')
//think of the router as a mini app, like we had app in our last config now we can replace app with router
//create a route handler, inside get put the route you want to work with
//get will create a route handler, the first argument being the URL we are looking for "/"
//http://127.0.0.1:3000/

router.get("/", controller.renderHomePage)
router.post("/", controller.getWeather)
  //.send allows us to send back text directly to the page with a response/res
//What is middleware? Functions that get executed during a request
// http://127.0.0.1:3000/about

router.get("/about", controller.renderAboutPage)



module.exports = router