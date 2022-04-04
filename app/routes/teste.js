const res = require('express/lib/response');

var dbConnection = require('../../config/conexaoBd')

module.exports = function(app){ 
    
    var conection = dbConnection()

    app.get('/teste', function(req,res) {       
   
    conection.query( 'select * from pessoa' , function(error, result){
        res.render("teste/teste", {pessoa : result })
    })

    })
}

