$("#btn-login").click(function(){
    console.log($("#formulario").serialize());
    $.ajax({
        url:"/login",
        method:"POST",
        data:$("#formulario").serialize(),
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            if (respuesta.length == 1)
                window.location.href = "/home.html";
            else 
                alert("Credenciales invalidas");
        },
        error:function(error){
            console.error(error);
        }
    });
});