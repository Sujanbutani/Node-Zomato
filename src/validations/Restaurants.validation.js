const Joi =require("joi")

/** create restaurant */
const createRestaurant = {
    body: Joi.object().keys({
      restaurant_name: Joi.string().required().trim(),
      restaurant_address: Joi.string().required().trim(),
      restaurant_contact_no: Joi.string().required().trim(),
      owner_name: Joi.string().required().trim(),
      owner_contact_no: Joi.number().integer().required(),
      Restaurant_image: Joi.string().allow(""),
      email: Joi.string().required().trim(),
      Restaurant_type : Joi.string().required().trim()
    }),
  };
module.exports={
    createRestaurant,
}