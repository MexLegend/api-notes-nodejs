import { RowDataPacket } from 'mysql2';
import getPool from '../../db/getPool';
import { internalServerError, notFoundError } from '../../helpers/errors.helper';
import { INote, NOTE_ERROR_TYPE } from '../../interfaces/note.interface';

const main = async (noteId: string) => {
	try {
		// connect to the db
		const pool = await getPool();

		// register user
		const sqlQuery = 'SELECT * FROM notes WHERE id = ?';
		const values = [noteId];

		const [notes] = await pool.query<RowDataPacket[]>(sqlQuery, values);

		if (notes.length !== 1) {
			notFoundError<NOTE_ERROR_TYPE>('Note not found', 'NOTE_NOT_FOUND');
		}
		// return response
		return notes[0] as INote;
	} catch (error) {
		internalServerError<NOTE_ERROR_TYPE>(error.message, 'GET_NOTES_ERROR');
	}
};

export default main;
