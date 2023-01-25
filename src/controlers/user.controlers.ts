import { Request, Response } from "express";
import dataSource from "../config/config"
import { UserEntity } from "../entitys/user.entitys";
class UserController{
    
 public async GET_users(req: Request, res: Response) {
        res.json(await dataSource.getRepository(UserEntity).find())
    }

    public async POST_users(req: Request, res: Response) {
        const { name, age } = req.body

        const newUser = await dataSource.getRepository(UserEntity)
            .createQueryBuilder()
            .insert()
            .into(UserEntity)
            .values({name, age})
            .returning([name, age])
            .execute()

            res.json(newUser)
    }       
}

export default new UserController()