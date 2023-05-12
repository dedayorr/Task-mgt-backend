const bcrypt = require("bcrypt");
const passwordHasher = async () => {
  try {
    const salt = bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }
};

module.exports = passwordHasher
