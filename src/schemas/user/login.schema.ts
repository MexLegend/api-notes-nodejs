import joi from 'joi';

const createSchema = joi
	.object({
		email: joi.string().required().email().messages({
			'string.base': 'The email must be a string',
			'any.required': 'The email field is required',
			'string.email': 'The email field must be a valid email address'
		}),
		password: joi.string().required().min(8).max(20).messages({
			'any.required': 'The password field is required',
			'string.min': 'The password must have at least {#limit} characters',
			'string.max': 'The password must not exceed {#limit} characters'
		})
	})
	.messages({
		'any.required': 'Email and password are required'
	})
	.required();

export default createSchema;
