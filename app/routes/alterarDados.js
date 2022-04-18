var dbConnection = require('../../config/conexaoBd')


module.exports = function(app){

    var conection = dbConnection()

    app.get('/alterar/:id', function(req,res) {
        const id = req.params.id
        conection.query('select * from pessoa WHERE id = ?',[id], function (error, result) {
            res.render("formAlterar/alterar", {dado : result })                      
            //console.log({id})
        })
    })

    //var conection = dbConnection()

    //rota para alterar dados
    // app.post('/dados/alterar/:id', function(req,res) {
    //     //const id = req.params.id
    //     var dados = req.body
    //     //res.render(dados)
    //     conection.query('UPDATE pessoa SET nome = ?, email = ?, endereco = ? WHERE ID = ?', [id] ,function (error, result) {
    //         res.redirect('/teste')
    //     })
    // });


}


// con.query('UPDATE book SET title = ? WHERE ID = ?', ['Redes de Computadores', 6],(err,ressult) => {
//         if(err) throw err;
//              console.log('Changed ', ressult)
//     })