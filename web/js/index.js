$(document).ready(function () {
    console.log("Documento Listo");
    $("#showPassword").click(function(){
        $("#password").val("hola");
    });





    /*$("#showPassword").onclick(function () {
        var cambiar = document.getElementById("password");
        if (cambiar.type == "password") {
            cambiar.type = "text";
        } else {
            cambiar.type = "password";
        }
    });*/
});