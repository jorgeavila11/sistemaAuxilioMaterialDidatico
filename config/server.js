const express = require('express')
const bodyParser =  require('body-parser')



const app = express()


app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('./app/public'))

module.exports = app