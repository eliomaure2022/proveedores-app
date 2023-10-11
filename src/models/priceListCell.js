const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return priceListCell.init(sequelize, DataTypes);
};

class priceListCell extends Sequelize.Model {
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
        providersId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "providers",
            key: "id",
          },
        },
        cellPhonesId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "cellPhones",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "priceListCell",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "priceListCell_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
