import { Request, Response, NextFunction } from 'express';
import validateHelper from '../../helpers/validate.helper';
import schema from '../../schemas/user/create.schema';
import { ICreateUser } from './interfaces/create.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Validate schema  
		await validateHelper<ICreateUser>(schema, req.body);
        
		// Send date to service
		// Return response
	} catch (error) {
		next(error);
	}
};

export default main;
