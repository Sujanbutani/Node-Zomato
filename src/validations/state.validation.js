const joi = require("joi")

// create state
const createstate = {
    body : joi.object().keys({
        state_name : joi.string().required().trim(),
        country : joi.string().required().trim(),
    }),
};

module.exports = {
    createstate
}