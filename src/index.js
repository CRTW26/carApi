import express from 'express';
import carList from '../cars.json'
const api = express();

api.get('/cars', (req, res) => {
  res.send(carList);
});

api.get('/car/:id', (req, res) => {
  let idToFind = parseInt(req.params.id)
  let carFound;
  for (let i = 0; i < carList.cars.length; i++) {
    if (carList.cars[i].id === idToFind) {
      carFound = carList.cars[i]
    }
  }
  res.send(carFound);
});

api.listen(3000, () => {
  console.log("api active");
});

export default api; 