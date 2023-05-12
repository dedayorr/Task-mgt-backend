const { userInputValidator, User } = require("../models/UserSchema")
const validateUserInput = require("../utils/JoiValidator")
const passwordHasher = require("../utils/hasher")

const RegisterUser = async (req, res) =>{
    try {
        // validate data
        const validInput = await validateUserInput(userInputValidator, req.body)
        // check the user does not exist
        const user = await User.findOne({email : validInput.email});
        if (user) {
            throw new Error("Email already exists")
        }
        // hash the user's password if user doesnt exist in DB
        validInput.password = await passwordHasher(validInput.password)
        // save the record to the database
        const savedUser = await User.create(validInput)
        //success message
        res.status(200).json({message: validInput})
    } catch (error) {
        res.status(501).json({status: "failed", message: error.message})
    }
}
module.exports = RegisterUser