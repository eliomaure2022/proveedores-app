const UsersServices = require("../services/users.services");
const { EventEmitter } = require("events");

const unhandledRejections = new EventEmitter();

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection at:", promise, "reason:", reason);
  process.exit(1);
  unhandledRejections.emit("unhandledRejection", reason, promise);
});

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await UsersServices.register(user);
    if (result) {
      res.status(201).json({ message: "User created" });
    }
  } catch (error) {
    console.error("Error:", error);
    unhandledRejections.emit("unhandledRejection", error);
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

unhandledRejections.on("unhandledRejection", (reason, promise) => {
  // Realiza acciones adicionales aquí, como registrar el error en un sistema de registro.
  console.error("Custom Unhandled Rejection:", reason, promise);
});

module.exports = { register, getUsers };
