import dotenv from 'dotenv'
import databaseConnect from './database/DatabaseConnect'
import userRoutes from './routes/UserRoutes'

if(process.env.NODE_ENV === 'local') {
    dotenv.config({ path:'./config/.env.local'})
}

databaseConnect.connect(process.env.DB as string)
.then(() => userRoutes.start())

/*const Question = mongoose.model('questions', new mongoose.Schema({
    questionText: {
        type: String,
        require: true
    }
}))
*/

/*
app.post('/user/register/:email/:password', async (req: Request, res: Response) => {
    const data = await User.findOne({ email: req.params.email, password: req.params.password})
    if(!data) return;
    res.status(200).send({ message: 'Logged in' })
    
})

app.post('/question/create', async (req: Request, res: Response) => {
    const { questionText } = req.body;
    await Question.create({ questionText })
    res.status(201).send({ message: "Question created in the database" })
})

app.get('/question/showquestions', async (req: Request, res: Response) => {
    const data = await Question.find()
    res.send(200).send({ allQuestions: data});
})

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))
*/