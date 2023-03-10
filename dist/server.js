"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
config_1.default
    .initialize()
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`App started ${PORT}`);
});
