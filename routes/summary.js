const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  INSERT_SUMMARY_CARD,
  GET_SUMMARY_CARD_BY_ID,
  UPDATE_SUMMARY_CONTENT,
  UPDATE_SUMMARY_TITLE,
  GET_SUMMARIES_BY_GROUP_ID,
  DELETE_SUMMARY_CARD,
} = require("../controllers/summary");

router.post("/summary", authMiddleware, INSERT_SUMMARY_CARD);
router.get("/summary/:id", GET_SUMMARY_CARD_BY_ID);
router.get("/summaries/:groupId", authMiddleware, GET_SUMMARIES_BY_GROUP_ID);
router.put("/summary/content/:id", UPDATE_SUMMARY_CONTENT);
router.put("/summary/title/:id", UPDATE_SUMMARY_TITLE);
router.delete("/summary/:id", DELETE_SUMMARY_CARD);

module.exports = router;