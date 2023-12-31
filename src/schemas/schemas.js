import  Joi from  "joi"

export const cakeSchema = Joi.object({
    name: Joi.string().required().min(2),
    price: Joi.number().positive().required(),
    image: Joi.string().uri().required(),
    description: Joi.string().required(),
})

export const clientSchema  = Joi.object({
    name:Joi.string().required(),
    address: Joi.string().required(),
    phone:Joi.number().min(10).max(11).required(),
})

export const orderSchema = Joi.object({
    cakeId: Joi.number().required().integer(),
     clientId : Joi.number().required().integer(),
     quantity: Joi.number().min(1).max(4).required().integer(),
     totalPrice: Joi.number().positive(),
})