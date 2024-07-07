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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db")); // Adjust the path to where your db.ts is located
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const propertiesRouter_1 = __importDefault(require("./routes/propertiesRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/user", UserRoutes_1.default);
app.use("/api/v1/properties", propertiesRouter_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to the database before starting the server
        yield (0, db_1.default)();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (err) {
        console.error('Error starting the server:', err);
        process.exit(1); // Exit the process with failure
    }
});
startServer();
