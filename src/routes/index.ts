import { Router } from "express";
import userControlers from "../controlers/user.controlers";
const router = Router()

export default router 
    .get('/users/get', userControlers.GET_users)
    .post('/users/create', userControlers.POST_users)