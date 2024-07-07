"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInforbyId = exports.getAllUser = exports.CreateUser = void 0;
const user_1 = __importDefault(require("../db/models/user"));
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const end = parseInt(req.query._end, 10) || 10;
        const users = yield user_1.default.find({}).limit(end);
        res.status(200).json({
            data: users,
            message: "All users fetched successfully",
            total: users.length,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
            error: error.message,
        });
    }
});
exports.getAllUser = getAllUser;
const getUserInforbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findOne({ _id: id }).populate("allPorperties");
        if (user) {
            return res.json(200).json(user);
        }
        else {
            return res.json(404).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.json(500).json({ message: err.message });
    }
});
exports.getUserInforbyId = getUserInforbyId;
const CreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, avatar, } = req.body;
        const userExist = yield user_1.default.findOne({ email: email });
        if (userExist) {
            res.json(409).json({ message: "User already exists" });
        }
        const newUser = yield user_1.default.create({ name, email, avatar });
        res.json(200).json({ message: "User created" });
    }
    catch (err) {
        console.log(err);
        res.json(500).json({
            message: "Failed to create user",
            error: err.message,
        });
    }
});
exports.CreateUser = CreateUser;
