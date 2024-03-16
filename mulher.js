const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Clara Nunes',
        imagem: 'https://pbs.twimg.com/profile_images/1705220250134835200/4xz5d-yI_400x400.jpg',
        minibio: 'apaixonada por frevo | pro player de apex legends | ansiosa | museóloga - ufpe | recifense e carioca honorária'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta" , porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)