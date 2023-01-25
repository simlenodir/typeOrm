"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controlers_1 = __importDefault(require("../controlers/user.controlers"));
const router = (0, express_1.Router)();
exports.default = router
    .get('/users/get', user_controlers_1.default.GET_users)
    .post('/users/create', user_controlers_1.default.POST_users);
