var express = require("express");
var app = express();

app.use(express.static("public"));//Ejecutar middlewares.

app.get("/procesar",function(req,res){ //req: Peticion, res: Respuesta
    res.send("Información recibida" + JSON.stringify(req.query)); //req.query es un JSON con los valores enviados
    res.end();
});

app.listen(8111);