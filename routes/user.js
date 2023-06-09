const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  INSERT_USER,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  DELETE_USER_BY_ID,
  LOGIN,
  GET_ALL_GROUPS_BY_USER_ID
} = require("../controllers/user");

router.post("/user", INSERT_USER);
router.post("/logIn",  LOGIN);
router.get("/users", authMiddleware, GET_ALL_USERS);
router.get("/user/:id", GET_USER_BY_ID);
router.delete("/user/:id", authMiddleware, DELETE_USER_BY_ID);
router.get("/groups/:userId", authMiddleware, GET_ALL_GROUPS_BY_USER_ID);

module.exports = router;