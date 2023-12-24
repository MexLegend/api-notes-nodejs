import { Request, Response, NextFunction } from 'express';
import { getOneById } from '../../services/note/index.service';

import validateHelper from '../../helpers/validate.helper';
import schema from '../../schemas/note/getOneById.schema';

import { IGetOneNote } from '../../interfaces/note.interface';
import { notAuthorizedError } from '../../helpers/errors.helper';

const main = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Validate schema
		const { noteId } = req.params;
		await validateHelper<IGetOneNote>(schema, { id: noteId });

		const note = await getOneById(noteId);

		if(note.userId !== req.user.id) {
			notAuthorizedError(`You don't have permission to view this note`);
		}

		// Return response
		res.send({ message: 'Found note', data: note });
	} catch (error) {
		next(error);
	}
};

export default main;
