var dbConnection = require('../../config/conexaoBd')

module.exports = function (app) {

    var conection = dbConnection()

    app.get('/teste', function (req, res) {
        conection.query('select * from pessoa', function (error, result) {
            res.render("teste/teste", { pessoa: result })
        })
    })
    
    app.get('/dados/deletar/:id', function (req, res) {
        const id = req.params.id
         conection.query('DELETE FROM pessoa WHERE id = ?', [id] ,function (error, result) {
             res.redirect('/teste')
         })        
    })    
}



// con.query('UPDATE book SET title = ? WHERE ID = ?', 
//     ['Redes de Computadores', 6],
//     (err,ressult) => {
//         if(err) throw err;

//         console.log('Changed ', ressult)
//     })
