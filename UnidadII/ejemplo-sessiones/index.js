var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({secret:"ASDFSDF$%%aasdera", resave: true, saveUninitialized:true}));

app.get("/",function(req,res){
    res.send("Ejercicio de sesiones");
    res.end();
})

app.get("/almacenar-sesion/:usuario",function(req, res){
    req.session.usuario = req.params.usuario;
    res.send("Se guardo la sesion");
    res.end();
});

app.get("/obtener-sesion",function(req, res){
    res.send("La sesion almacenada es : " + req.session.usuario);
    res.end();
});

app.get("/destruir-sesion",function(req, res){
    req.session.destroy();
    res.send("Sesion destruida");
    res.end();
});

app.listen(8111, function(){
    console.log("Servidor levantado, esperando peticiones");
});