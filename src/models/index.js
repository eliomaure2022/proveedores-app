const initModels = require("../models/init-models");
const db = require("../utils/database");

const models = initModels(db);
const { users, providers, parts, cellPhones, priceListCell, priceListParts } =
  models;

module.exports = {
  users,
  providers,
  parts,
  cellPhones,
  priceListCell,
  priceListParts,
};
