import { Router } from 'express';
import CarController from '../Controllers/carController';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).postCar());

export default router;
