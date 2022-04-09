const app = require('./config/server')

var formCadastro = require('./app/routes/formularioCadastro')
formCadastro(app)

var home = require('./app/routes/home')
home(app)

var tec = require('./app/routes/tecnologias')
tec(app)

var teste = require('./app/routes/teste')
teste(app)

app.listen('3000',() => {
    console.log('servidor up')
})