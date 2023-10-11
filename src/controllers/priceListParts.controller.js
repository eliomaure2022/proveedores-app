const PriceListPartsServices = require("../services/priceListParts.services");

const addList = async (req, res) => {
  try {
    const listParts = req.body;
    const result = await PriceListPartsServices.createList(listParts);
    if (result) {
      res.status(201).json({ message: "List parts created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { addList };
