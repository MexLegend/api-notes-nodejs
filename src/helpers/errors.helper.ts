import { ERROR_TYPE, IError } from '../interfaces/error.interface';

export class CustomError extends Error implements IError {
	public code: ERROR_TYPE;
	public httpStatus: number;

	constructor(message: string, code: ERROR_TYPE, httpStatus: number) {
		super();
		this.message = message;
		this.code = code;
		this.httpStatus = httpStatus;
	}
}

const conflictError = (msg: string, code: ERROR_TYPE = 'CONFLICT') => {
	const err = new CustomError(msg, code, 409);
	throw err;
};

const notFoundError = (msg: string, code: ERROR_TYPE = 'NOT_FOUND') => {
	const err = new CustomError(msg, code, 404);
	throw err;
};

const notAuthorizedError = (msg: string, code: ERROR_TYPE = 'UNAUTHORIZED') => {
	const err = new CustomError(msg, code, 401);
	throw err;
};

const forbiddenError = (msg: string, code: ERROR_TYPE = 'FORBIDDEN') => {
	const err = new CustomError(msg, code, 403);
	throw err;
};

const internalServerError = (msg: string, code: ERROR_TYPE = 'INTERNAL_ERROR') => {
	const err = new CustomError(msg, code, 500);
	throw err;
};

const badRequestError = (msg: string, code: ERROR_TYPE = 'BAD_REQUEST_ERROR') => {
	const err = new CustomError(msg, code, 400);
	throw err;
};

export { conflictError, notFoundError, notAuthorizedError, forbiddenError, internalServerError, badRequestError };
