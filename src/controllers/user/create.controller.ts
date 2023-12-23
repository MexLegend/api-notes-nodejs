import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { create } from '../../services/user/index.service';

import validateHelper from '../../helpers/validate.helper';
import schema from '../../schemas/user/create.schema';

import { ICreateUser } from '../../interfaces/user.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Validate schema
		await validateHelper<ICreateUser>(schema, req.body);

		// Send date to service
		req.body.password = await hash(req.body.password, 5);
		await create(req.body);

		// Return response
		res.send('User created successfully');
	} catch (error) {
		next(error);
	}
};

export default main;
