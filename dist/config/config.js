"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
exports.default = new typeorm_1.DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "nodir",
    "database": "n33",
    "entities": [
        path_1.default.join(__dirname, '..', 'entitys', '*.entitys.{ts,js}')
    ],
    "logging": true,
    "synchronize": true
});
