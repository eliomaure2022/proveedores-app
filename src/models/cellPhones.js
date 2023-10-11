const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return cellPhones.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     addCell:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: motorola
 *         description:
 *           type: string
 *           example: moto g60s
 *         price:
 *           type: double
 *           example: 19.99
 *         available:
 *           type: boolean
 *           example: true
 *         stock:
 *           type: integer
 *           example: 2
 *         image_url:
 *           type: string
 *           example: https://d3ugyf2ht6aenh.cloudfront.net/stores/001/955/262/products/flip-511-b34b410f73b756b8f216389028421439-1024-1024.jpg
 */

class cellPhones extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        available: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "cellPhones",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "cellPhones_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
