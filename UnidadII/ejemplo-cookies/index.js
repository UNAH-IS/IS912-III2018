var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.use(cookieParser());

app.get("/",function(req,res){
    res.send("Ejercicio de cookies");
    res.end();
})

app.get("/almacenar-cookie/:usuario",function(req, res){
    res.cookie("usuario",req.params.usuario);
    res.send("Se guardo la cookie");
    res.end();
});

app.get("/obtener-cookie",function(req, res){
    res.send("La cookie almacenada es : " + req.cookies.usuario);
    res.end();
});

app.listen(8111, function(){
    console.log("Servidor levantado, esperando peticiones");
});