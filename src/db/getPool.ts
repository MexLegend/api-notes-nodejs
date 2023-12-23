import { createPool, Pool } from 'mysql2/promise';
import { MYSQL_DB, MYSQL_HOST, MYSQL_PASS, MYSQL_USER } from '../config';

let pool: Pool;

const main = async () => {
	try {
		if (!pool) {
			const poolTemp = createPool({
				host: MYSQL_HOST,
				user: MYSQL_USER,
				password: MYSQL_PASS
			});

			await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

			pool = createPool({
				host: MYSQL_HOST,
				user: MYSQL_USER,
				password: MYSQL_PASS,
				database: MYSQL_DB,
				connectionLimit: 10,
				timezone: 'Z'
			});
		}

		return pool;
	} catch (error) {
		console.error(error);
	}
};

export default main;
