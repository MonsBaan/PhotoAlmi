$(document).ready(function() {
    console.log("Documento Listo")
    var urlWebService = "http://192.168.6.195:8080/kalmihootApi/"

    var urlHtml = "http://192.168.6.157/PhotoAlmi/web/php/ajax.php"

    $(".panelOculto").hide();
    $(".close2").hide();
    var session;
    $.get('php/session.php', function(data) {
        session = JSON.parse(data);
    });


    $("#editarDatosUsuario").click(function() {
        $(".panelModificar").hide();
        $(".panelOculto").show();
        $(".close2").show();
        $("#repassword").val("");
        $("#password").val("");
        $("#phone").val("");
        $("#address").val("");


    });


    $("#confirmarDatosUsuario").click(function(event) {
        var error = false;

        $('#myModal').css('display', 'block');
        $('.modal-content > p').text('¿Deseas guardar los cambios?');
        //aceptar
        $('#aceptar').click(function() {
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
                $(".close2").hide();
            }


            $('#myModal').css('display', 'none');
        });
        //canelar
        $('#cancelar').click(function() {
            event.preventDefault()
            $('#myModal').css('display', 'none');
        });
    });



});

$(".close2").click(function() {


    $('#myModal').css('display', 'block');
    $('.modal-content > p').text('¿Deseas guardar los cambios?');
    //aceptar
    $('#aceptar').click(function() {
        $(".panelModificar").show();

        $('#myModal').css('display', 'none');
    });
    //canelar
    $('#cancelar').click(function() {
        $(".panelModificar").show();
        $(".panelOculto").hide();
        $(".close2").hide();
        $('#myModal').css('display', 'none');
    });
});