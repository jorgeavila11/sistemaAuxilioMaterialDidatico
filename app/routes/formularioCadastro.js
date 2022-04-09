module.exports = function(app){
    app.get('/formulario', (req,res) => {
        res.render("form/cadastro")
    });

    //rota para cadastro dos dados
    app.post('/dados/salvar', (req,res) => {
        var dados = req.body;
        res.send(dados)
    });
}