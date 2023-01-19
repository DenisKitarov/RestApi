const Joi = require('joi');

const ReviewScheme = {
    create: Joi.object().keys(
        {
            couponId: Joi.number().integer()
                .required(),

            rate: Joi.number()
                .required(),

            comment: Joi.string(),

            date: Joi.date(),
        }
    ),

    edit: Joi.object().keys(
        {
            couponId: Joi.number().integer(),

            rate: Joi.number(),

            comment: Joi.string(),
        }
    )
};

module.exports = ReviewScheme;