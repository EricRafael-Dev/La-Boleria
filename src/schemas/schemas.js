import  Joi from  "joi"

export const cakeSchema = Joi.object({
    name: Joi.string().required().min(2),
    price: Joi.number().integer().positive().required(),
    image: Joi.string().uri().required(),
    description: Joi.string().required(),
})

export const clientSchema  = Joi.object({
    name:Joi.string().required(),
    address: Joi.string().required(),
    phone:Joi.number().required(),
})