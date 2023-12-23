import express from 'express';
import dotenv from 'dotenv';

if (process.env.NODE_ENV?.includes('development')) dotenv.config();

import { HTTP_PORT } from './config';
import router from './routers/index.router';

const api = express();
api.use('/api', router);

const port = HTTP_PORT || 3001;

api.listen(port, () => {
	console.log('\x1b[36m\x1b[1m', 'Server running on:', '\x1b[32m', `http://localhost:${port}`, '\x1b[0m');
});