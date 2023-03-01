import { Router } from 'express';
import CarController from '../Controllers/carController';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).postCar());
router.get('/cars', (req, res, next) => new CarController(req, res, next).getCar());
router.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarId());

export default router;
