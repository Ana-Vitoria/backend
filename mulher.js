const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostramulher (request, response){
    response.json({
        nome:'Simara conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'instrutora e desenvolvedora'

    })
}
function mostraPorta () {
console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostramulher))
app.listen(porta, mostraPorta)