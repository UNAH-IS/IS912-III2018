var express = require("express");
var router = express.Router();

router.get("/agregar",function(req, res){
    res.send("Agregar un usuario");
});

router.get("/eliminar",function(req, res){
    res.send("Eliminar un usuario");
});

module.exports = router;