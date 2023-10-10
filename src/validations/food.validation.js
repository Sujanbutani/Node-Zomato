const Joi =require("joi")

/** create food */
const createFood = {
    body: Joi.object().keys({
      food_name: Joi.string().required().trim(),
      food_desc: Joi.string().required().trim(),
      food_image: Joi.string().allow(""),
      Restaurant: Joi.string().required().trim(),
    }),
  };
module.exports={
    createFood
}