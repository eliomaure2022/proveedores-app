const { Router } = require("express");
const {
  addCell,
  getAllCell,
  updateCellPhone,
  deleteCell,
} = require("../controllers/cellPhones.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/cellPhones:
 *   post:
 *     summary: create a new cellPhone into the app
 *     tags: [cellPhones]
 *     requestBody:
 *       description: required fields to add a new cellphone
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addCell'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: cellphone created
 *
 */

router.post("/", addCell);
router.get("/", getAllCell);
router.put("/:id", updateCellPhone);
router.delete("/:id", deleteCell);

module.exports = router;
