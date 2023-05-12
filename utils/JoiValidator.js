const Joi = require("joi");

const validateUserInput = async(schema, input)=>{
    try {
        return await schema.validateAsync(input);
    } catch (error) {
        throw error;
    }
}

module.exports = validateUserInput;