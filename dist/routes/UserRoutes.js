"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controllers_1 = require("../controllers/User.controllers"); // Adjust the path accordingly
const router = express_1.default.Router();
router.get("/users", User_controllers_1.getAllUser);
router.get("/users/:id", User_controllers_1.getUserInforbyId);
router.post("/users", User_controllers_1.CreateUser);
exports.default = router;
