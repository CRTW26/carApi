import express from 'express';
// import fs from 'fs';
const fs = require('fs')
import carList from '../cars.json';
import searchCars from './carSearch';
import checkDate from './dateChecker';
const api = express();

api.use(express.json())

api.get('/cars', (req, res) => {
  res.send(carList);
});

api.get('/car/:id', (req, res) => {
  let idToFind = parseInt(req.params.id)
  let car = searchCars(carList, idToFind);
  res.send(car);
});

api.post('/cars', (req, res) => {
  // let dateArray = req.body.buildDate.split('/')
  // let carBuildDate = new Date(dateArray[2], dateArray[1], dateArray[0])
  // let now = new Date()
  // let diff = Math.abs(now - carBuildDate)
  // let days = (diff / (1000 * 3600 * 24))
  // console.log(days)

  if (checkDate(req.body.buildDate) > 1460) {
    res.json("Car build date is older than four years")
  } else {
    carList.cars.push(req.body)
    fs.writeFile('cars.json', JSON.stringify(carList, null, 4),  (err) => {
      if (err) {
        throw(err)
      } 
    })
    res.json("Car successfully added") 
  }
});

api.listen(3000, () => {
  console.log("api active");
});

export default api; 