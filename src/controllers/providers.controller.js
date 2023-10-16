// const PriceListCellServices = require("../services/priceListCell.services");
const ProvidersServices = require("../services/providers.services");

const addProvider = async (req, res) => {
  try {
    const provider = req.body;
    const result = await ProvidersServices.createProvider(provider);
    if (result) {
      // const providersId = result.id;
      // const newList = { providersId };
      // await PriceListCellServices.createList(newList);
      res.status(201).json({ message: "Provider created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { addProvider };
