const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routes/users.routes.js",
    "./src/models/users.js",
    "./src/routes/providers.routes.js",
    ".src/models/provider.js",
    ".src/routes/priceListCell.routes.js",
    "./src/models/priceListCell.js",
    "./src/routes/priceListParts.routes.js",
    "./src/models/priceListParts.js",
    "./src/routes/cellPhones.routes.js",
    "./src/models/cellPhones.js",
    "./src/routes/parts.routes.js",
    "./src/models/parts.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proveedores en node.js",
      version: "0.0.9",
      description: "API para gestion de proveedores",
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application.json");
    res.send(swaggerSpec);
  });
  console.log(
    `La documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
