import { Request, Response, NextFunction } from 'express';
import { login } from '../../services/user/index.service';

import validateHelper from '../../helpers/validate.helper';
import schema from '../../schemas/user/login.schema';

import { ILoginUser } from '../../interfaces/user.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Validate schema
		await validateHelper<ILoginUser>(schema, req.body);

		// Send date to service
		const token = await login(req.body);

		// Return response
		res.send(token);
	} catch (error) {
		next(error);
	}
};

export default main;
