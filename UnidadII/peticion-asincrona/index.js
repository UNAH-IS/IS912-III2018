var express = require("express");
var mysql = require("mysql");

var app = express();
app.use(express.static("public"));
var credenciales = {
    user: "root",
    password:"",
    database:"registro",
    host:"localhost",
    port:"3306"
};

app.get("/guardar",function(req,res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query("INSERT INTO usuarios(nombre, apellido, edad, password, pais) VALUES (?,?,?,?,?)",
        [req.query.nombre, req.query.apellido, req.query.edad, req.query.password, req.query.pais],
        function(error, data, fields){
            res.send(data);
            res.end();
        }
    );
});

app.get("/usuarios",function(req,res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query("SELECT codigo_persona, nombre, apellido, edad, password, pais FROM usuarios",
        [],
        function(error, data, fields){
            res.send(data);
            res.end();
        }
    );
});

app.listen(8111, function(){
    console.log("El servidor esta arriba");
});