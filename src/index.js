import express from 'express';
const api = express();

api.get('/cars', (req, res) => {
  res.send("/cars");
});

api.listen(3000, () => {
  console.log("api active");
});

export default api; 