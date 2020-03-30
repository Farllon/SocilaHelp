const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

//Configs

    //Template Engine
        app.engine("handlebars", handlebars({
            defaultLayout: 'main'
        }));
        app.set('view engine', 'handlebars');

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

//Rotas

app.get("/", function(req, res){
    res.render("home");
})

app.get("/about", function(req, res){
    res.render("about")
})

app.listen(8081, function(){
    console.log("Servidor iniciado com sucesso!");
})