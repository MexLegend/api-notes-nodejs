import { Request, Response, NextFunction } from 'express';
import { getOwnList } from '../../services/note/index.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const notes = await getOwnList(req.user.id);

		// Return response
		res.send({ message: 'Own notes list', data: notes });
	} catch (error) {
		next(error);
	}
};

export default main;
