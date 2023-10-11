const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return parts.init(sequelize, DataTypes);
}

class parts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "parts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
