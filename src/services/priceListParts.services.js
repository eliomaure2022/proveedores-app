const { priceListParts } = require("../models");

class PriceListPartsServices {
  static async createList(listParts) {
    try {
      const result = await priceListParts.create(listParts);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PriceListPartsServices;
