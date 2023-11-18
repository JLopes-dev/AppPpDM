const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3001

// Conectando com o banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/Questioner')
.then(() => console.log('mongoose...'))
.catch(err => console.log(` error: ${err}`))

// Schema do Banco
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

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/user/cadastro', async (req, res) => {
    const { email, password } = req.body;
    await User.create({email, password})
    res.send({ message: 'Dados criados com sucesso!' })
})

app.post('/user/cadastro/:email/:password', async (req, res) => {
    const data = await User.findOne({ email: req.params.email, password: req.params.password})
    if(!data) return;
    res.send({ message: 'logado' })
    
})

app.listen(3001, () => console.log(`Server rodando na porta ${PORT}`))