export type USER_ERROR_TYPE = 'CREATE_USER_ERROR' | 'USER_NOT_FOUND' | 'WRONG_PASSWORD';

export interface IUser {
	email: string;
	password: string;
}

export interface IUserData extends IUser {
	id: string;
}

export interface ILoginUser extends IUser {}

export interface ICreateUser extends IUser {}
