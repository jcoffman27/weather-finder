const axios = require("axios")

const API_KEY = "c398c114cfe32bd3a95cbbff5c9c3b32"

const Weather = require("../model/Weather")


exports.renderHomePage = (req, res) => {
  res.render("index")
}

exports.getWeather = (req, res) => {
  const city = req.body.city
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const weather = new Weather(req.body.city)
  weather.validateUserInput()

  if (weather.errors.length){
    res.render('index', {
      error: weather.errors.toString()
    })
  }else {
    axios.get(url).then((data)=>{
      const { temp: temperature } = data.data.main
      const { name: city } = data.data
      const { country: country } = data.data.sys
      res.render('index', {
        weather: `It is currently ${temperature}\u00B0C in ${city}, ${country}`
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

exports.renderAboutPage = (req, res) => {
  res.render("about")
}

/*
let city = req.body.city

return URL
console.log(URL)
*/
