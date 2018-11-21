var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();
var credenciales = {
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database: "bd_whatsapp"
};

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/usuarios", function(req,res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT codigo_usuario, nombre_usuario, correo, contrasena, url_imagen_perfil FROM tbl_usuarios",
        [],
        function(error, data, fields){
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        }
    );
});

app.get("/mensajes/:usuarioEmisor/:usuarioReceptor",function(req, res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `select  a.codigo_usuario_emisor,
                a.codigo_usuario_receptor,
                a.mensaje, a.hora_mensaje,
                b.nombre_usuario as nombre_usuario_emisor,
                c.nombre_usuario as nombre_usuario_receptor
        from tbl_mensajes a
        inner join tbl_usuarios b
            on(a.codigo_usuario_emisor = b.codigo_usuario)
        inner join tbl_usuarios c
            on(a.codigo_usuario_receptor = c.codigo_usuario)
        where (codigo_usuario_emisor = ? and codigo_usuario_receptor = ?)
        or (codigo_usuario_emisor = ? and codigo_usuario_receptor = ?)
        order by codigo_mensaje;`,
        [
            req.params.usuarioEmisor,
            req.params.usuarioReceptor,
            req.params.usuarioReceptor,
            req.params.usuarioEmisor
        ],
        function(error, data, fields){
            res.send(data);
            res.end();
        }
    );
    
});


//Esta ruta hace lo mismo que la anterior solo que se recibe los parametros via URLEncoded (GET)
app.get("/mensajes",function(req,res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `select  a.codigo_usuario_emisor,
                a.codigo_usuario_receptor,
                a.mensaje, a.hora_mensaje,
                b.nombre_usuario as nombre_usuario_emisor,
                c.nombre_usuario as nombre_usuario_receptor
        from tbl_mensajes a
        inner join tbl_usuarios b
            on(a.codigo_usuario_emisor = b.codigo_usuario)
        inner join tbl_usuarios c
            on(a.codigo_usuario_receptor = c.codigo_usuario)
        where (codigo_usuario_emisor = ? and codigo_usuario_receptor = ?)
        or (codigo_usuario_emisor = ? and codigo_usuario_receptor = ?)
        order by codigo_mensaje;`,
        [
            req.query.usuarioEmisor,
            req.query.usuarioReceptor,
            req.query.usuarioReceptor,
            req.query.usuarioEmisor
        ],
        function(error, data, fields){
            res.send(data);
            res.end();
        }
    );
});

app.post("/enviar",function(req,res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "INSERT INTO tbl_mensajes(codigo_usuario_emisor, codigo_usuario_receptor, mensaje, hora_mensaje) VALUES (?,?,?,?)",
        [
            req.body.emisor,
            req.body.receptor,
            req.body.mensaje,
            req.body.hora
        ],
        function(error, data, fields){
            if (error){
                res.send(error);
                res.end();
            }else{
                res.send(data);
                res.end();
            }
        }
    );
});

app.listen(8111, function(){ console.log("Servidor iniciado");});