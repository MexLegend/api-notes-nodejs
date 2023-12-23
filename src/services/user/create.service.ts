import { ResultSetHeader } from 'mysql2';
import getPool from '../../db/getPool';
import { conflictError, internalServerError } from '../../helpers/errors.helper';
import { ICreateUser, USER_ERROR_TYPE } from '../../interfaces/user.interface';

const main = async (user: ICreateUser) => {
	try {
		// connect to the db
		const pool = await getPool();

		// register user
		const sqlQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
		const values = [user.email, user.password];

		const [response] = await pool.query<ResultSetHeader>(sqlQuery, values);

		if (response.affectedRows !== 1) {
			conflictError<USER_ERROR_TYPE>('User insertion error', 'CREATE_USER_ERROR');
		}

		// return response
	} catch (error) {
		internalServerError<USER_ERROR_TYPE>(error.message, 'CREATE_USER_ERROR');
	}
};

export default main;
