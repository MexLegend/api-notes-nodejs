import { Router } from 'express';
import userRouter from './user.router';
import noteRouter from './note.router';

const router = Router();
router.use('/user', userRouter);
router.use('/note', noteRouter);

export default router;
