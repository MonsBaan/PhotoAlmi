$(document).ready(function() {
    console.log("Documento Listo");
    var urlWebService = "http://192.168.6.195:8080/kalmihootApi/"
    var urlHtml = "http://192.168.6.157/PhotoAlmi/web/php/ajax.php"

    //----------------------------------AJAX----------------------------------
    //FUNCION DE LOGIN

    $("#FormularioLogin").submit(function(event) {
        event.preventDefault()
        var dniUser = $("#dni").val();
        var passUser = $("#password").val();

        $.ajax({
            url: urlWebService + "trabajador/" + dniUser + "/" + passUser,
            type: "get",
            success: function(response) {
                $('#error').hide('slow');
                usuario = response.data
                var parametros = {
                    "id": usuario.id_trabajador,
                    "nombre": usuario.nombre,
                    "apellido1": usuario.apellido1,
                    "apellido2": usuario.apellido2,
                    "dni": usuario.dni,
                    "direccion": usuario.direccion,
                    "telefono": usuario.telefono,
                    "contrasena": usuario.contrasena,
                    "imagen": usuario.imagen,
                    "puesto": usuario.descripcion,
                    "function": "login"
                };
                $.ajax({
                    data: parametros,
                    url: urlHtml,
                    type: "POST",
                    success: function(response) {
                        $('#FormularioLogin').unbind('submit').submit();

                    },

                });
            },
            error: function() {
                $('#error').slideDown('slow');
            }
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