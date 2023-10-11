const { Router } = require("express");
const { addList } = require("../controllers/priceListParts.controller");

const router = Router();

router.post("/", addList);

module.exports = router;
