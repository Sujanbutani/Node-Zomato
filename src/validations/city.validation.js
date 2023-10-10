const joi = require("joi")

// create city
const createcity = {
    body : joi.object().keys({
        city_name : joi.string().required().trim(),
        country : joi.string().required().trim(),
        state : joi.string().required().trim(),
    }),
};

module.exports = {
    createcity
}