const joi = require("joi")

// create blog
const createblog = {
    body : joi.object().keys({
        title : joi.string().required().trim(),
        content : joi.string().required().trim(),
        author_name : joi.string().required().trim(),
        tag : joi.string().required().trim(),

    }),
};

module.exports = {
    createblog
}