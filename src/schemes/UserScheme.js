const Joi = require('joi');

const UserScheme = {
    create: Joi.object().keys(
        {
            email: Joi.string()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            roleId: Joi.number(),

            first_name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            last_name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            phone: Joi.string(),

            city: Joi.string()
                .min(3)
                .max(100)
                .required(),
        }
    ),

    edit: Joi.object().keys(
        {
            email: Joi.string()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


            first_name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            last_name: Joi.string()
                .min(3)
                .max(30)
                .required(),

            phone: Joi.string()
                .required(),

            city: Joi.string()
                .min(3)
                .max(100)
                .required(),
        }
    ),

    login: Joi.object().keys(
        {
            email: Joi.string()
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        }
    )
};

module.exports = UserScheme;