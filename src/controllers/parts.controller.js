const PartsServices = require("../services/parts.services");

const addPart = async (req, res) => {
  try {
    const part = req.body;
    const result = await PartsServices.createCell(part);
    if (result) {
      res.status(201).json({ message: "Part created" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    throw error;
  }
};

const getAllParts = async (req, res) => {
  try {
    const result = await PartsServices.getAll();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const updateParts = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const field = { price };
    const result = await PartsServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const deletePart = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PartsServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = { addPart, getAllParts, updateParts, deletePart };
