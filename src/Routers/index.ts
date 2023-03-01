import { Router } from 'express';
import CarRouter from './carRouter';
import MotorRouter from './motorRouter';

const router = Router();

router.use('/cars', CarRouter);
router.use('/motorcycles', MotorRouter);

export default router;
