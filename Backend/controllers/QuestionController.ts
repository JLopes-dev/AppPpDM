import { Request, Response } from "express";
import User from "../models/UserModel";
import Question from "../models/QuestionModel";

class QuestionController {
    
    public async createQuestion(req: Request, res: Response) {
        const { email, title, description } = req.body
        const data = await User.findOne({ email })
        if(data) {
            await Question.create({
                title,
                description,
                userId: data._id
            }).then(() => console.log("Question created!"))
            .catch((err) => console.log(" error " + err))
        }
        res.status(201).send({ message: "Question created with successfully" })
    }
    public async showQuestions(req: Request, res: Response) {
        const { userId } = req.body        
        const data = await Question.find({ userId })
        res.send({ message: data })

    }
}
const questionController = new QuestionController()
export default questionController;