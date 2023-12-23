import { NextFunction, Request, Response } from 'express';
import { IError } from '../../interfaces/error.interface';

const main = (err: IError, req: Request, res: Response, next: NextFunction) => {
	res.status(err.httpStatus || 500).send(err);
};

export default main;
