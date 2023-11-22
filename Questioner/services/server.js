const express = require('express') 
const mongoose = require('mongoose')
const app = express()
const PORT = 3001
const dotenv = require('dotenv')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

if(process.env.DATABASE === 'local '){
    dotenv.config({path: '../config/.env.local'})
} 

// Conectando com o banco de dados

mongoose.connect(process.env.DB)

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

app.post('/user/register', async (req, res) => {
    const { email, password } = req.body;
    await User.create({email, password})
    res.status(201).send({ message: 'Data created with successfully' })
})

app.post('/user/register/:email/:password', async (req, res) => {
    const data = await User.findOne({ email: req.params.email, password: req.params.password})
    if(!data) return;
    res.status(200).send({ message: 'Logged in' })
    
})

app.post('/question/create', async (req, res) => {
    const { questionText } = req.body;
    await Question.create({ questionText })
    res.status(201).send({ message: "Question created in the database" })
})

app.get('/question/showquestions', async (req, res) => {
    const data = await Question.find()
    res.send(200).send({ allQuestions: data});
})

app.listen(3001, () => console.log(`Server listening on PORT: ${PORT}`))