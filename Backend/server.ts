import express, { Request, Response } from 'express' 
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({extended:true}))

if(process.env.NODE_ENV === 'local') {
    dotenv.config({ path:'./config/.env.local'})
}
else{
    console.log("Hello");
    
}


// Conectando com o banco de dados
mongoose.connect(process.env.DB as string)
.then(() => console.log('mongoose...'))
.catch(err => console.log(` error: ${err}`))

// Schema da collection de Usuários
const User = mongoose.model('users', new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}))

// Schema da collection de Perguntas
const Question = mongoose.model('questions', new mongoose.Schema({
    questionText: {
        type: String,
        require: true
    }
}))

app.post('/user/register', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    await User.create({email, password})
    res.status(201).send({ message: 'Data created with successfully' })
})

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