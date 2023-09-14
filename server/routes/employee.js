const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.get("/", EmployeeController.store);

module.exports = router;
