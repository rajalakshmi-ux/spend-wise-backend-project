
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const transaction = require("../controllers/transactionController");

router.post("/",authMiddleware,transaction.addTransaction);
router.get("/",authMiddleware,transaction.getTransactions);

module.exports = router;
