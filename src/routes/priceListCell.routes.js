const { Router } = require("express");
const { addList } = require("../controllers/priceListCell.controller");

const router = Router();

router.post("/", addList);

module.exports = router;
