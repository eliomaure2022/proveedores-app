const { users } = require("../models");

class UsersServices {
  static async register(user) {
    try {
      const result = await users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
