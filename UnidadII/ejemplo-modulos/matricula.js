var express = require("express");
var router = express.Router();

router.get("/agregar",function(req, res){
    res.send("Se matriculara a alguien");
});

router.get("/cancelar",function(req, res){
    res.send("Se cancelara una matricula");
});

module.exports = router;