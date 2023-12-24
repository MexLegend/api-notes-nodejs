import { ResultSetHeader } from 'mysql2';
import getPool from '../../db/getPool';
import { internalServerError } from '../../helpers/errors.helper';
import { NOTE_ERROR_TYPE } from '../../interfaces/note.interface';

const main = async (userId: string) => {
	try {
		// connect to the db
		const pool = await getPool();

		// register user
		const sqlQuery = 'SELECT title FROM notes WHERE userId = ?';
		const values = [userId];

		const [notes] = await pool.query<ResultSetHeader>(sqlQuery, values);

		// return response
		return notes;
	} catch (error) {
		internalServerError<NOTE_ERROR_TYPE>(error.message, 'GET_NOTES_ERROR');
	}
};

export default main;
