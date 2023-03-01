import { Router } from 'express';
import MotorController from '../Controllers/motorController';

const router = Router();

router.post('/', (req, res, next) => new MotorController(req, res, next).post());

export default router;
