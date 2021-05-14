$(document).ready(function() {
    var urlDB = "http://localhost/PhotoAlmi/web/php/ajax.php";
    $(".panelOculto").hide();
    $(".close").hide();


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
                var nombreUser = $("#liName").text();
                var direccionUser = $("#address").val();
                var telefonoUser = $("#phone").val();
                var passUser = $("#password").val();
                var parametros = {
                    "nombre": nombreUser,
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

});