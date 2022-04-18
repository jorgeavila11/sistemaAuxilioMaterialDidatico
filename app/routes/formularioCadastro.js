var dbConnection = require('../../config/conexaoBd')

module.exports = function(app){
    app.get('/formulario', (req,res) => {
        res.render("form/cadastro")
    });


    var conection = dbConnection()
    
    //rota para cadastro dos dados
    app.post('/dados/salvar', function(req,res) {
        var dados = req.body
        //res.render(dados)
        conection.query('INSERT INTO pessoa SET ?',dados, (error, result) => {        
             if(error){
                 console.log(error)
             }else{
                 res.redirect('/teste')
             }
            
         })        
    });
}