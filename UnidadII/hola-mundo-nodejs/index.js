//Crear un servidor
//NodeJS trabaja con componentes llamados módulos, un modulo es un conjunto de funciones.
var http = require("http"); //Se utiliza require para importar modulos.

http.createServer(function(peticion, respuesta){
    //Esta funcion anonima se ejecutaría cada vez que el usuario haga una peticion.
    console.log("Se recibio una peticion");
    respuesta.writeHead(200, {"Content-Type":"text/html"});
    respuesta.write("<html><body><h1>Hola mundo</h1></body></html>");
    respuesta.end();
}).listen(8111);

console.log("Esperando peticiones");

