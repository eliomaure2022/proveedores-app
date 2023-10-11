const { Router } = require("express");
const {
  addPart,
  getAllParts,
  updateParts,
  deletePart,
} = require("../controllers/parts.controller");

const router = Router();

router.post("/", addPart);
router.get("/", getAllParts);
router.put("/:id", updateParts);
router.delete("/:id", deletePart);

module.exports = router;
