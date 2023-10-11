const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return providers.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     addProvider:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: elio proveedor
 *         phone:
 *           type: integer
 *           example: 2634525252
 *         email:
 *           type: string
 *           example: elio@gmail.com
 *         userId:
 *           type: integer
 *           example: 1
 */

class providers extends Sequelize.Model {
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
        phone: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "providers",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "providers_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
