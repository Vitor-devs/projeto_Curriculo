const express = require('express')
const bodyParser = require("body-parser")
const connection = require('./database/database')
const tabela = require('./database/tabelas')
const app = express()

connection 
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!")
  })
  .catch((msgErro) => { 
    console.log(msgErro)
    console.log("Conexão falhou")
  })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/home.html', (req, res)=>{
  res.sendFile(__dirname + '/home.html')
})

app.post('/salvarFormulario', (req, res)=>{
    const nome = req.body.nome 
    const empresa = req.body.empresa
    const dataEmissao = new Date()

    tabela.create({
        nome: nome,
        empresa: empresa,
        dataEmissao: dataEmissao,
    
      }).then(() => {
        console.log("Formulário recebido !")
      })
        .catch((msgErro) => {
          console.log(msgErro)
          console.log("Formulário não foi recebido !")
        })
    
})

app.listen(3000)