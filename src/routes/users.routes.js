const { Router } = require("express");
const { register, getUsers } = require("../controllers/users.controller");

const router = Router();
/**
 *@openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a new user into aplication
 *     tags: [Users]
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                   example: user created
 */

router.post("/", register);
router.get("/", getUsers);

module.exports = router;
