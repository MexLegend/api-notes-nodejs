import { NextFunction, Request, Response } from 'express';
import { notAuthorizedError } from '../helpers/errors.helper';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

const main = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { authorization } = req.headers;
		if (!authorization) {
			notAuthorizedError('Required token');
		}

		if (!authorization.startsWith('Bearer ')) {
			notAuthorizedError('Invalid token');
		}

		const token = authorization.substring(7);

		let tokenInfo;

		try {
			tokenInfo = verify(token, SECRET_KEY);
			req.user = tokenInfo;
            next();
		} catch (error) {
			notAuthorizedError('Invalid token');
		}
	} catch (error) {
		next(error);
	}
};

export default main;
