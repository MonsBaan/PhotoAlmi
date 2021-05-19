$(document).ready(function() {
    console.log("Documento Listo");
    var urlDB = "http://192.168.6.151/PhotoAlmi/web/php/ajax.php";

    //----------------------------------AJAX----------------------------------
    //FUNCION DE LOGIN
    $("#FormularioLogin").submit(function(event) {
        var dniUser = $("#dni").val();
        var passUser = $("#password").val();
        var parametros = {
            "dni": dniUser,
            "contrasena": passUser,
            "function": "loginAjax"
        };
        event.preventDefault();
        $.ajax({
            data: parametros,
            url: urlDB,
            type: "post",
            success: function(response) {
                var arrayParse = JSON.parse(response);
                if (arrayParse == null) {
                    $('#error').slideDown('slow');

                } else {
                    $('#FormularioLogin').unbind('submit').submit();
                }
            },
        });
    });

    //----------------------------------EVENTOS JS----------------------------------
    //FUNCION DEL OJO
    $("#eye").click(function() {
        if ($(this).hasClass("fa-eye-slash")) {
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
            $("#password").attr("type", "text");
        } else {
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
            $("#password").attr("type", "password");
        }
    });
});