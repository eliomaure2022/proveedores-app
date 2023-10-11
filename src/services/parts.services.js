const { parts, priceListParts } = require("../models");

class PartsServices {
  static async createPart(part) {
    try {
      const result = await parts.create(part);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await parts.findAll({
        include: {
          attributes: ["providersId"],
          model: priceListParts,
          as: "priceListParts",
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
      const result = await parts.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await parts.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PartsServices;
