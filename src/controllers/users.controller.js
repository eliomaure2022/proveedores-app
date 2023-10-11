const UsersServices = require("../services/users.services");

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await UsersServices.register(user);
    if (result) {
      res.status(201).json({ message: "User crated" });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { register };
