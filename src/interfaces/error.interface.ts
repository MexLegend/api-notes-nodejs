export type ERROR_TYPE =
	| 'CONFLICT'
	| 'NOT_FOUND'
	| 'UNAUTHORIZED'
	| 'FORBIDDEN'
	| 'INTERNAL_ERROR'
	| 'BAD_REQUEST_ERROR';

export interface IError {
	readonly code: ERROR_TYPE;
	readonly httpStatus: number;
	readonly message: string;
}
