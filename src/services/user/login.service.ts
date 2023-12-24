import { RowDataPacket } from 'mysql2';
import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import getPool from '../../db/getPool';
import { internalServerError, notAuthorizedError, notFoundError } from '../../helpers/errors.helper';
import { ICreateUser, USER_ERROR_TYPE } from '../../interfaces/user.interface';
import { EXPIRE_TOKEN, SECRET_KEY } from '../../config';

const main = async (user: ICreateUser) => {
	try {
		// connect to the db
		const pool = await getPool();

		// search user
		const sqlQuery = 'SELECT * FROM users WHERE email = ?';
		const values = [user.email];

		const [users] = await pool.query<RowDataPacket[]>(sqlQuery, values);

		if (users.length === 0) {
			notFoundError<USER_ERROR_TYPE>('User not found', 'USER_NOT_FOUND');
		}

		if (!compareSync(user.password, users[0].password)) {
			notAuthorizedError<USER_ERROR_TYPE>('Wrong password', 'WRONG_PASSWORD');
		}

		const tokenInfo = {
			id: users[0].id
		};

		const token = sign(tokenInfo, SECRET_KEY, {
			expiresIn: EXPIRE_TOKEN
		});

		// return response
		return token;
	} catch (error) {
		internalServerError<USER_ERROR_TYPE>(error.message, 'USER_NOT_FOUND');
	}
};

export default main;
