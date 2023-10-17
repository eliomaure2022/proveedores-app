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

const getUsers = async (req, res) => {
  try {
    const result = await UsersServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { register, getUsers };
