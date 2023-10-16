const CellPhonesServices = require("../services/cellphones.services");

const addCell = async (req, res) => {
  try {
    const Cell = req.body;
    const result = await CellPhonesServices.createCell(Cell);
    if (result) {
      res.status(201).json({ message: "Cellphone created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    throw error;
  }
};

const getAllCell = async (req, res) => {
  try {
    const result = await CellPhonesServices.getAll();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const updateCellPhone = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const field = { price };
    const result = await CellPhonesServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const deleteCell = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CellPhonesServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = { addCell, getAllCell, updateCellPhone, deleteCell };
