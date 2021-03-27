import express from 'express';
// import fs from 'fs';
const fs = require('fs')
import carList from '../cars.json';
import searchCars from './carSearch'
import checkDate from './dateChecker';
const api = express();

api.use(express.json())

api.get('/cars', (req, res) => {
  res.send(carList);
});

api.get('/car/:id', (req, res) => {
  let idToFind = parseInt(req.params.id);
  let car = searchCars(carList, idToFind);
  res.send(car);
});

api.post('/cars', (req, res) => {
  if (checkDate(req.body.buildDate) > 1460) return res.json("Car build date is older than four years")
    carList.cars.push(req.body)
    fs.writeFile('cars.json', JSON.stringify(carList, null, 4),  (err) => {
      if (err) {
        throw(err)
      } 
    })
    res.json("Car successfully added") 
});

api.delete('/cars/:id', (req, res) => {
  let idToDelete = parseInt(req.params.id);
  let carIndex;
  for (let i = 0; i < carList.cars.length; i ++ ){
    if (carList.cars[i].id === idToDelete) {
      carIndex = i;
    }
  }
  let originalCarList = carList;
  originalCarList.cars.splice(carIndex)

  fs.writeFile('cars.json', JSON.stringify(originalCarList, null, 4),  (err) => {
    if (err) {
      console.log("Error here")
    } 
  })
  res.json("Car deleted") 

});

api.listen(3000, () => {
  console.log("api active");
});

export default api; 