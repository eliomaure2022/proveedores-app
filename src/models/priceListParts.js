const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return priceListParts.init(sequelize, DataTypes);
}

class priceListParts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    providersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'providers',
        key: 'id'
      }
    },
    partsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'parts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'priceListParts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "priceListParts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
