const express = require("express");
const { cartItems, actionOnCart, purchaseCart, historyItems } = require("../controllers/cart");

const router = express.Router();

router.get("/:userId", cartItems);
router.post("/:action/:userId/:gameId", actionOnCart);
router.post("/purchase/:userId", purchaseCart); 
router.get("/history/:userId", historyItems);

module.exports = router;