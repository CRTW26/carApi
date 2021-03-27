import express from 'express';
import carRoutes from './routes/cars'

const api = express();

api.use(express.json())

api.use('/', carRoutes)

export default api; 