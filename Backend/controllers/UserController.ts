import { Request, Response } from "express";
import User from "../models/UserModel";

class UserController {

    public async createUser(req: Request, res: Response) {
        const { email, password } = req.body;
        await User.create({email, password})
        res.status(201).send({ message: 'Data created with successfully' })
    }
}

const userController = new UserController()
export default userController