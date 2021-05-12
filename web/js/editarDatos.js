$(document).ready(function () {
    var urlDB = "http://localhost/PhotoAlmi/web/php/ajax.php";
    $(".panelOculto").hide();
    $(".close").hide();


    $("#editarDatosUsuario").click(function () {
        $(".panelModificar").hide();
        $(".panelOculto").show();
        $(".close").show();

    });

    $("#confirmarDatosUsuario").click(function (event) {
        if (!window.confirm("¿Guardar los datos modificados?")) {
            event.preventDefault();
        } else {
            $(".panelOculto").hide();
            $(".panelModificar").show();
            $(".close").hide();
                var direccionUser = $("#address").val();
                var telefonoUser = $("#phone").val();
                var passUser = $("#password").val();
                var parametros = {
                  direccion: direccionUser,
                  telefono: telefonoUser,
                  contrasena: passUser,
                  function: "updateUser",
                };
            
                $.ajax({
                  data: parametros,
                  url: urlDB,
                  type: "post",
                  success: function (response) {},
                });
              

            //AJAX ENVÍO DE DATOS
        }

    });

    $(".close").click(function (event) {
        if (window.confirm("¿Cancelar los datos modificados?")) {
            $(".panelModificar").show();
            $(".panelOculto").hide();
            $(".close").hide();
        } else {
            event.preventDefault();

        }
    });

});
