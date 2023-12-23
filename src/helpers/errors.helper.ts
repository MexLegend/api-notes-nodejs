import { ERROR_TYPE, IError } from '../interfaces/error.interface';

export class CustomError<T> extends Error implements IError<T> {
	public code: T;
	public httpStatus: number;

	constructor(message: string, code: T, httpStatus: number) {
		super();
		this.message = message;
		this.code = code;
		this.httpStatus = httpStatus;
	}
}

const conflictError = <T = ERROR_TYPE>(msg: string, code: T) => {
	const err = new CustomError(msg, code || 'CONFLICT', 409);
	throw err;
};

const notFoundError = <T = ERROR_TYPE>(msg: string, code: T) => {
	const err = new CustomError(msg, code || 'NOT_FOUND', 404);
	throw err;
};

const notAuthorizedError = <T = ERROR_TYPE>(msg: string, code: T) => {
	const err = new CustomError(msg, code || 'UNAUTHORIZED', 401);
	throw err;
};

const forbiddenError = <T = ERROR_TYPE>(msg: string, code: T) => {
	const err = new CustomError(msg, code || 'FORBIDDEN', 403);
	throw err;
};

const internalServerError = <T = ERROR_TYPE>(msg: string, code: T) => {
	const err = new CustomError(msg, code || 'INTERNAL_ERROR', 500);
	throw err;
};

const badRequestError = <T = ERROR_TYPE>(msg: string, code: T) => {
	const err = new CustomError(msg, code || 'BAD_REQUEST_ERROR', 400);
	throw err;
};

export { conflictError, notFoundError, notAuthorizedError, forbiddenError, internalServerError, badRequestError };
