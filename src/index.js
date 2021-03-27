import express from 'express';
import carList from '../cars.json'
import searchCars from './CarSearch';
const api = express();

api.get('/cars', (req, res) => {
  res.send(carList);
});

api.get('/car/:id', (req, res) => {
  let idToFind = parseInt(req.params.id)
  let car = searchCars(carList, idToFind);
  res.send(car);
});

api.listen(3000, () => {
  console.log("api active");
});

export default api; 