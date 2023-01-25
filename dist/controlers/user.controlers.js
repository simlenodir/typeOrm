"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const user_entitys_1 = require("../entitys/user.entitys");
class UserController {
    async GET_users(req, res) {
        res.json(await config_1.default.getRepository(user_entitys_1.UserEntity).find());
    }
    async POST_users(req, res) {
        const { name, age } = req.body;
        const newUser = await config_1.default.getRepository(user_entitys_1.UserEntity)
            .createQueryBuilder()
            .insert()
            .into(user_entitys_1.UserEntity)
            .values({ name, age })
            .returning([name, age])
            .execute();
        res.json(newUser);
    }
}
exports.default = new UserController();
