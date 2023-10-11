const { providers } = require("../models");

class ProvidersServices {
  static async createProvider(provider) {
    try {
      const result = await providers.create(provider);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProvidersServices;
