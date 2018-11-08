var express = require("express");
var app = express();

app.use(express.static("public"));//Ejecutar middlewares.

app.get("/pagina.html",function(req,res){
    res.send("<html><body><h1>Hola mundo</h1></body></html>");
    res.end();
});

app.get("/pagina1",function(req,res){
    res.send("<html><body><h1>Pagina 1</h1></body></html>");
    res.end();
});

app.get("/pagina4",function(req,res){
    res.send("<html><body><h1>Pagina 2</h1></body></html>");
    res.end();
});

app.listen(8111);