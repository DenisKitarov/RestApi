const Joi = require('joi');

const CouponsScheme = {
    create: Joi.object().keys(
        {
            name: Joi.string()
                .min(3)
                .max(256)
                .required(),

            discount: Joi.number()
                .min(1)
                .max(100)
                .required(),

            amount: Joi.number()
                .min(1)
                .required(),

            start_date: Joi.date() //string?
                .required(),

            end_date: Joi.date() //string?
                .required(),
        }
    ),

    edit: Joi.object().keys(
        {
            name: Joi.string()
                .min(3)
                .max(256)
                .required(),

            discount: Joi.number()
                .min(1)
                .max(100)
                .required(),

            amount: Joi.number()
                .min(1)
                .required(),

            start_date: Joi.date() //string?
                .required(),

            end_date: Joi.date() //string?
                .required(),
        }
    )
};

module.exports = CouponsScheme;