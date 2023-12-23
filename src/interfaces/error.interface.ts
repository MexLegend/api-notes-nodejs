export type ERROR_TYPE =
	| 'CONFLICT'
	| 'NOT_FOUND'
	| 'UNAUTHORIZED'
	| 'FORBIDDEN'
	| 'INTERNAL_ERROR'
	| 'BAD_REQUEST_ERROR';

export interface IError<T = ERROR_TYPE> {
	readonly code: T;
	readonly httpStatus: number;
	readonly message: string;
}
