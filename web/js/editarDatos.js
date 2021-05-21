$(document).ready(function() {
    var urlWebService = "http://192.168.6.195:8080/kalmihootApi/"
    var urlHtml = "http://192.168.6.157/PhotoAlmi/web/php/ajax.php"

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
        $("#repassword").val("");
        $("#password").val("");
        $("#phone").val("");
        $("#address").val("");


    });


    $("#confirmarDatosUsuario").click(function(event) {
        var error = false;
        if (window.confirm("Confirm the changes")) {
            var contr = $("#password").val();
            var reContr = $("#repassword").val();
            var telef = $("#phone").val();
            if (contr != reContr) {
                $("#repassword").val("");
                $("#repassword").css("background-color", "red");
                error = true;
            } else {

                $("#repassword").css("background-color", "");
            }


            if (isNaN(telef)) {
                $("#phone").val("");
                $("#phone").css("background-color", "red");
                error = true;
            } else {
                $("#phone").css("background-color", "");
            }

            if (error) {
                event.preventDefault();
            } else {
                var id = session.id;
                var direccionUser = $("#address").val().trim();
                var telefonoUser = $("#phone").val().trim();
                var passUser = $("#password").val().trim();

                if (direccionUser.length == 0) {
                    direccionUser = session.dir;
                }
                if (passUser.length == 0) {
                    passUser = session.pass;
                }
                if (telefonoUser.length == 0) {
                    telefonoUser = session.tlf;
                }

                var parametros = {
                    "nombre": session.name,
                    "apellido1": session.sur1,
                    "apellido2": session.sur2,
                    "dni": session.dni,
                    "direccion": direccionUser,
                    "telefono": telefonoUser,
                    "contrasena": passUser,
                    "puesto": session.idPos,
                    "imagen": session.img,
                    "id_trabajador": session.id
                };

                $.ajax({
                    data: parametros,
                    url: urlWebService + "trabajadores/" + id,
                    type: "put",
                    success: function(response) {
                        $("#addressMostrar").html(direccionUser);
                        $("#phoneMostrar").html(telefonoUser);

                        var parametros = {
                            "direccion": direccionUser,
                            "telefono": telefonoUser,
                            "contrasena": passUser,
                            "function": "update"
                        };

                        $.ajax({
                            data: parametros,
                            url: urlHtml,
                            type: "post",
                            success: function(response) {
                                console.log(response)



                            },
                        });
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
        if (window.confirm("Are you sure that you want to go back?")) {
            $(".panelModificar").show();
            $(".panelOculto").hide();
            $(".close").hide();


        } else {
            event.preventDefault();

        }
    });

});