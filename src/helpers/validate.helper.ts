import { Schema } from 'joi';
import { badRequestError } from './errors.helper';

const main = async <T>(schema: Schema, data: T) => {
	try {
		await schema.validateAsync(data);
	} catch (error) {
		badRequestError(error.details[0]?.message);
	}
};

export default main;
