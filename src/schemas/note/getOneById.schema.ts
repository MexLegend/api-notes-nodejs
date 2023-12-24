import joi from 'joi';

const getOneByIdSchema = joi
	.object({
		id: joi.number().required().messages({
			'string.base': 'The noteId must be a string',
			'any.required': 'The noteId is required'
		})
	})
	.messages({
		'any.required': 'Note Id is required'
	})
	.required();

export default getOneByIdSchema;
