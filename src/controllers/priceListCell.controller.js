const PriceListCellServices = require("../services/priceListCell.services");

const addList = async (req, res) => {
  try {
    const listCell = req.body;
    const result = await PriceListCellServices.createList(listCell);
    if (result) {
      res.status(201).json({ message: "List cellphones created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { addList };
