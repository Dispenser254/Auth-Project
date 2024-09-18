import express from "express";
import { getUser, signout } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signout", verifyToken, signout);
router.get("/:userId", verifyToken, getUser);

export default router;
