const { priceListCell } = require("../models");

class PriceListCellServices {
  static async createList(listCell) {
    try {
      const result = await priceListCell.create(listCell);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PriceListCellServices;
