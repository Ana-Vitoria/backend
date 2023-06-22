const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const mulheres= [
    { 
        nome:'Simara conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'instrutora e desenvolvedora'
    },
    {
        nome:'iana chan',
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'fundadora da programaria' 
    },
    {
        nome:'nina da hora',
        imagem: 'https://s2.glbimg.com/yGI874PlyQ54XTj3cdeO2eCCGzg=/smart/e.glbimg.com/og/ed/f/original/2021/05/06/gq115_especialnina.png',
        minibio: 'hacker antirracista'  
    }
]



function mostraMulheres(request, response) {
response.json(mulheres)
}

function mostraPorta () {
console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)