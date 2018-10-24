//var usuarios = [];
var db;

function registrar(){
    var usuario ={
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        birthday: document.getElementById("birthday").value
    }
    //usuarios.push(usuario);

    //Guardar objeto en BD
    var transaccion = db.transaction(["usuarios"],"readwrite");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    var solicitud = objectStoreUsuarios.add(usuario);
    solicitud.onsuccess = function(evento){
        console.log("Se agrego el usuario correctamente");
        document.getElementById("contenido-tabla").innerHTML="";
        llenarTablaUsuarios();
    }

    solicitud.onerror = function(evento){
        console.log("Ocurrio un error al guardar");
    }

    //console.log(usuarios);
}


(function(){
    if (!('indexedDB' in window)){
        console.error("El navegador no soporta indexedDB");
        return;
    }

    var solicitud = window.indexedDB.open("facebook", 1);//Parametros: nombre, version. La version debe ser entero
    
    //Se ejecutara en caso de que pueda abrir la BD sin problemas
    solicitud.onsuccess = function(evento){
        console.log("Se abrio la base de datos");
        db = solicitud.result;
        llenarTablaUsuarios();
    };

    //Se ejecutar en caso no se pueda abrir la base de datos
    solicitud.onerror = function(evento){
        console.error("No se pudo abrir la base datos");
    };

    //Se ejecutara cuando NO exista la base de datos o se necesite actualizar
    solicitud.onupgradeneeded = function(evento){
        console.log("La base de datos se creara o se actualizara");
        db = evento.target.result; //Obteniendo la refencia la base de datos creada (facebook)
        var objectStoreUsuarios = db.createObjectStore("usuarios", {keyPath: "codigo", autoIncrement: true});

        objectStoreUsuarios.transaction.oncomplete = function(evento){
            console.log("El object store de usuarios se creo con exito");
        }

        objectStoreUsuarios.transaction.onerror = function(evento){
            console.log("Error al crear el object store de usuarios");
        }
        //En este punto se debe crear la estructura de la base de datos
        //Es necesario crear almacenes de objetos en la base de datos (Object Store)
    }
})();


function llenarTablaUsuarios(){
    //document.getElementById("contenido-tabla").innerHTML
    var transaccion = db.transaction(["usuarios"],"readonly");///readwrite: Escritura/lectura, readonly: Solo lectura
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    var cursor = objectStoreUsuarios.openCursor();
    cursor.onsuccess = function(evento){
        //Se ejecuta por cada objeto del objecstore
        if(evento.target.result){
            console.log(evento.target.result.value);
            var usuario = evento.target.result.value;
            document.getElementById("contenido-tabla").innerHTML += 
                    `<tr>
                        <td>${usuario.firstname}</td>
                        <td>${usuario.lastname}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.birthday}</td>
                    </tr>`;
            evento.target.result.continue();
        }
    }
}

/*function agregarContenido(){
    document.getElementById("contenido").innerHTML = "Hola mundo";
}*/
