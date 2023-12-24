import { Router } from 'express';
import { getOwnList, getOneById } from '../controllers/note/index.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.get('/list', authMiddleware, getOwnList);
router.get('/:noteId', authMiddleware, getOneById);

export default router;
