export type NOTE_ERROR_TYPE = 'GET_NOTES_ERROR' | 'NOTE_NOT_FOUND';

export interface IGetOneNote {
	id: string;
}

export interface INote extends IGetOneNote {
	title: string;
	text: string;
	userId: string;
	categoryId: string;
	createdAt: string;
	modifiedAt: string;
}
