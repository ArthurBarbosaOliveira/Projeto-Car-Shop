import { Router } from 'express';
import CarController from '../Controllers/carController';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).postCar());
router.get('/', (req, res, next) => new CarController(req, res, next).getCar());
router.get('/:id', (req, res, next) => new CarController(req, res, next).getCarId());
router.put('/:id', (req, res, next) => new CarController(req, res, next).update());

export default router;
