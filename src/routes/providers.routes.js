const { Router } = require("express");
const { addProvider } = require("../controllers/providers.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/providers:
 *   post:
 *     summary: create a new provider into the app
 *     tags: [Providers]
 *     requestBody:
 *       description: required fields to add a new provider
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProvider'
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: provider created
 *       400:
 *         description: not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 */

router.post("/", addProvider);

module.exports = router;
