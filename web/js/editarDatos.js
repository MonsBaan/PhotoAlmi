$(document).ready(function() {
    var urlDB = "http://localhost/PhotoAlmi/web/php/ajax.php";
    $(".panelOculto").hide();
    $(".close").hide();
    var session;
    $.get('php/session.php', function(data) {
        session = JSON.parse(data);
    });


    $("#editarDatosUsuario").click(function() {
        $(".panelModificar").hide();
        $(".panelOculto").show();
        $(".close").show();

    });


    $("#confirmarDatosUsuario").click(function(event) {
        var error = false;
        if (window.confirm("¿Guardar los datos modificados?")) {
            var contr = $("#password").val();
            var reContr = $("#repassword").val();
            if (contr != reContr) {
                $("#repassword").val("");
                $("#repassword").css("background-color", "red");
                error = true;
            }

            if (error) {
                event.preventDefault();
            } else {
                var id = session.id;
                var direccionUser = $("#address").val().trim();
                var telefonoUser = $("#phone").val().trim();
                var passUser = $("#password").val().trim();

                if (direccionUser.length == 0) {

                    direccionUser = $_SESSION['dir'];
                }

                if (passUser.length == 0) {

                    passUser = $_SESSION['pass'];
                }

                if (telefonoUser.length == 0) {

                    telefonoUser = $_SESSION['tlf'];
                }

                var parametros = {
                    "id": id,
                    "direccion": direccionUser,
                    "telefono": telefonoUser,
                    "contrasena": passUser,
                    "function": "updateUser",
                };




                $.ajax({
                    data: parametros,
                    url: urlDB,
                    type: "post",
                    success: function(response) {
                        $("#addressMostrar").html(direccionUser);
                        $("#phoneMostrar").html(telefonoUser);
                    },
                });
                $(".panelOculto").hide();
                $(".panelModificar").show();
                $(".close").hide();
            }


        } else {
            event.preventDefault();

        }

    });

    $(".close").click(function(event) {
        if (window.confirm("¿Cancelar los datos modificados?")) {
            $(".panelModificar").show();
            $(".panelOculto").hide();
            $(".close").hide();


        } else {
            event.preventDefault();

        }
    });

    /*
        $.ajax({

            contentType: "application/json",
            url: 'http://192.168.6.195:8080/kalmihootApi/preguntas',

            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                //let preguntas = JSON.stringify(data);
                //console.log(data);
            },

            error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status);
            },



        });
    */
});