const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Clara Nunes',
        imagem: 'https://pbs.twimg.com/profile_images/1705220250134835200/4xz5d-yI_400x400.jpg',
        minibio: 'apaixonada por frevo, recifense e carioca honorária',
    },
    {
        nome: 'Sophia Helena',
        imagem: 'https://pbs.twimg.com/profile_images/1767640892083490816/rleTUynU_400x400.jpg',
        minibio: 'Librianja carioca que ama roupa de vaquinha',
    },
    {
        nome: 'Katara',
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/3/39/Katara_Avatar.png',
        minibio: 'dobradora de água. VAI KATARA',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta " , porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)