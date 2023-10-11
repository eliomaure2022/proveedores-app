const usersRoutes = require("./users.routes");
const providersRoutes = require("./providers.routes");
const priceListCellRoutes = require("./priceListCell.routes");
const cellPhonesRoutes = require("./cellPhones.routes");
const partsRoutes = require("./parts.routes");
const priceListPartsRoutes = require("./priceListParts.routes");

const routerApi = (app) => {
  app.use("/api/v1/users", usersRoutes);
  app.use("/api/v1/providers", providersRoutes);
  app.use("/api/v1/priceListCell", priceListCellRoutes);
  app.use("/api/v1/cellPhones", cellPhonesRoutes);
  app.use("api/v1/parts", partsRoutes);
  app.use("api/v1/partsList", priceListPartsRoutes);
};

module.exports = routerApi;
