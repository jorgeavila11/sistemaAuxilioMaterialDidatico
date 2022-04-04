module.exports = function(app){
    app.get('/formulario', (req,res) => {
        res.render("form/cadastro")
    })
}