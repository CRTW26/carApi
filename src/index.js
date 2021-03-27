import express from 'express';
import carRoutes from './routes/cars'

const api = express();

api.use(express.json())

api.use('/', carRoutes)


api.listen(3000, () => {
  console.log("api active");
});

export default api; 