import { Request, Response } from "express";
import User from "../models/UserModel";

class UserController {

    public async createUser(req: Request, res: Response) {
        const { email, password } = req.body;
        await User.create({email, password})
        res.status(201).send({ message: 'Data created with successfully' })
    }
    public async showOneUser(req: Request, res: Response) {
        const data = await User.findOne({ email: req.params.email })
        res.status(200).send({ message: data })
    }
    public async showAllUsers(req: Request, res: Response) {
        const data = await User.find()
        res.status(200).send({ message: data })
    }
    public async updateUser(req: Request, res: Response) {
        const { email, password, newPassword } = req.body
        await User.findOneAndUpdate({ email, password }, { password: newPassword })
        res.status(200).send({ message: "Data updated with successfully" })
    }
    public async deleteUser(req: Request, res: Response) {
        const { email } = req.body
        await User.findOneAndDelete({ email })
        res.status(200).send({ message: "Data deleted with successfully" })
    }
}

const userController = new UserController()
export default userController