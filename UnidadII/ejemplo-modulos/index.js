var express = require("express");
var modulo = require("./modulo");
var matricula = require("./matricula");
var usuarios = require("./usuarios");

var app = express();
app.use("/matricula",matricula);
app.use("/usuarios",usuarios);

app.get("/",function(req, res){
    //var conexion = mysql.createConection(modulo.credenciales);
    res.send(modulo.mostrarMensaje());
    res.end();
});

app.listen(8111,function(){
    console.log("Servidor iniciado");
});