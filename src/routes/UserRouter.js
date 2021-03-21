const express = require("express");
const UserController = require("../controllers/UserController")
const router = express.Router();

router.get("/users", UserController.fetchAll)
router.get("/user/:id", UserController.fetchOne)
router.post("/user", UserController.create)
router.put("/user/:id", UserController.update)
router.delete("/user/:id", UserController.delete)

module.exports = router