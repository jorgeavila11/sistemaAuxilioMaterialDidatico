var dbConnection = require('../../config/conexaoBd')

module.exports = function (app) {

    var conection = dbConnection()

    //rota preencher campo alterar
    app.get('/alterar/:id', function (req, res) {
        const id = req.params.id
        conection.query('select * from pessoa WHERE id = ?', [id], function (error, result) {
            res.render("formAlterar/alterar", { dado: result })
            //console.log(result)
        })
    })

    app.post('/dados/alterar/:id', function(req,res) {
        var dados = req.body
        var id = req.params.id        
        conection.query('UPDATE pessoa SET ? WHERE id = ?', [dados,id] ,function (error, result) {
            res.redirect('/teste')
        })        
    });

}


// con.query('UPDATE book SET title = ? WHERE ID = ?', ['Redes de Computadores', 6],(err,ressult) => {
//         if(err) throw err;
//              console.log('Changed ', ressult)
//     })