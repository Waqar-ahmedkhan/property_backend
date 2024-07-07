import express from "express";
import { CreateUser, getAllUser, getUserInforbyId } from "../controllers/User.controllers"; // Adjust the path accordingly

const router = express.Router();

router.get("/users", getAllUser);
router.get("/users/:id", getUserInforbyId);
router.post("/users", CreateUser);

export default router;
