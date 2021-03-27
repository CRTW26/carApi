import { Router } from 'express';
import fs from 'fs';
import carList from '../../cars.json';
import searchCars from '../carSearch'
import checkDate from '../dateChecker';

let router = Router();

router.get('/cars', (req, res) => {
  res.send(carList);
});

router.get('/car/:id', (req, res) => {
  let idToFind = parseInt(req.params.id);
  let carID = searchCars(carList, idToFind);
  res.send(carList.cars[carID]);
});

router.post('/cars', (req, res) => {
  if (checkDate(req.body.buildDate) > 1460) return res.json("Car build date is older than four years")
    carList.cars.push(req.body)
    fs.writeFile('cars.json', JSON.stringify(carList, null, 4),  (err) => {
      if (err) {
        throw(err)
      } 
    })
    res.json("Car successfully added") 
});

router.delete('/cars/:id', (req, res) => {
  let idToDelete = parseInt(req.params.id);
  let carIndex = searchCars(carList, idToDelete)
  let originalCarList = carList;
  originalCarList.cars.splice(carIndex)

  fs.writeFile('cars.json', JSON.stringify(originalCarList, null, 4),  (err) => {
    if (err) {
      console.log("Error here")
    } 
  })
  res.json("Car deleted") 
});

export default router;