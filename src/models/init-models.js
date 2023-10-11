const DataTypes = require("sequelize").DataTypes;
const _cellPhones = require("./cellPhones");
const _parts = require("./parts");
const _priceListCell = require("./priceListCell");
const _priceListParts = require("./priceListParts");
const _providers = require("./providers");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const providers = _providers(sequelize, DataTypes);
  const cellPhones = _cellPhones(sequelize, DataTypes);
  const parts = _parts(sequelize, DataTypes);
  const priceListCell = _priceListCell(sequelize, DataTypes);
  const priceListParts = _priceListParts(sequelize, DataTypes);

  priceListCell.belongsTo(cellPhones, {
    as: "cellPhone",
    foreignKey: "cellPhonesId",
  });
  cellPhones.hasMany(priceListCell, {
    as: "priceListCells",
    foreignKey: "cellPhonesId",
  });
  priceListParts.belongsTo(parts, { as: "part", foreignKey: "partsId" });
  parts.hasMany(priceListParts, {
    as: "priceListParts",
    foreignKey: "partsId",
  });
  priceListCell.belongsTo(providers, {
    as: "provider",
    foreignKey: "providersId",
  });
  providers.hasMany(priceListCell, {
    as: "priceListCells",
    foreignKey: "providersId",
  });
  priceListParts.belongsTo(providers, {
    as: "provider",
    foreignKey: "providersId",
  });
  providers.hasMany(priceListParts, {
    as: "priceListParts",
    foreignKey: "providersId",
  });
  providers.belongsTo(users, { as: "user", foreignKey: "userId" });
  users.hasMany(providers, { as: "providers", foreignKey: "userId" });

  return {
    users,
    providers,
    priceListCell,
    priceListParts,
    cellPhones,
    parts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
