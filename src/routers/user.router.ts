import { Router } from 'express';

const router = Router();

router.post('/create', (req, res) => {
	res.send('Ruta de creacion de usaurio');
});

export default router;
