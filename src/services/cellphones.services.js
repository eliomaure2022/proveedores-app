const { cellPhones, providers, priceListCell } = require("../models");

class CellPhonesServices {
  static async createCell(Cell) {
    try {
      const result = await cellPhones.create(Cell);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await cellPhones.findAll({
        include: {
          attributes: ["providersId"],
          model: priceListCell,
          as: "priceListCells",
          include: {
            attributes: ["name"],
            model: providers,
            as: "provider",
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await cellPhones.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await cellPhones.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CellPhonesServices;
