$(document).ready(function() {
    console.log("Documento Cargado");
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    var nombreDocumento = "0";
    var controlCheck = "1";

    var idPregunta;

    $("input[type='checkbox']").on('change', function() {
        $(this).attr('value', 'false');
        // controlCheck = "0";
        if ($("#check1").is(':checked')) {
            $("#check1").attr('value', 'true');
            // $('#check1').is(':checked');

        }
        if ($("#check2").is(':checked')) {
            //$(this).val('2');
            $("#check2").attr('value', 'true');

        }
        if ($("#check3").is(':checked')) {
            $("#check3").attr('value', 'true');
            //$(this).val('5');
        }
        if ($("#check4").is(':checked')) {
            $("#check4").attr('value', 'true');
            //$(this).val('3');


        }

    });

    $(document).on('change', "input[type='file']", function(event) {
        if ($(this).val()) {
            var filename = $(this).val().split("\\");
            nombreDocumento = filename = filename[filename.length - 1];
            $('.fileName').text(filename);
        }
    });

    $(document).submit('.formSubir', function() {



    });

    $.ajax({
        url: urlDB + "preguntas",
        type: "get",
        success: function(response) {
            let arrayCategorias = response.data;
            for (let i = 0; i < arrayCategorias.length; i++) {
                let htmlappend;
                htmlappend = "<option>" + arrayCategorias[i]['categoria'] + "</option>";
                $('#comboCategoria').append(htmlappend);
            }

        },
    });

    $("#botonPregunta").click(function(event) {
        event.preventDefault();
        var urlImagen = 'http://192.168.6.192/PhotoAlmi/web/source/image/' + nombreDocumento;
        console.log("Click");

        var formData = new FormData();
        var files = $('#fileToUpload')[0].files[0];
        formData.append('file', files);

        $.ajax({
            url: 'php/modificarPregunta.php',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response != 0) {
                    alert("Sucess: " + response);
                } else {
                    alert('Formato de imagen incorrecto.');
                }
            },
            error: function(response) {
                console.log(response);
            }
        });

    });

    $("#botonPregunta").click(function(event) {


        var pregunta = $("#question").val();

        let categoria = $("#comboCategoria").val();

        //CONTROLAR SI SE SELECCIONA UN CHECKBOX
        // var checkbox = $("input[type='checkbox']").val();

        var respuesta1 = $("#ans1").val();
        var respuesta2 = $("#ans2").val();
        var respuesta3 = $("#ans3").val();
        var respuesta4 = $("#ans4").val();

        var explicacion = $("#expl").val();



        if (!window.confirm("¿Enviar pregunta?")) {
            event.preventDefault();
        } else {

            //COMPROBAR SI TODOS LOS CAMPOS ESTÁN COMPLETOS
            if (nombreDocumento == "0" | pregunta | respuesta1 | respuesta2 | respuesta3 | respuesta4 | explicacion == "" | controlCheck == "0") {
                window.confirm("Rellena todos los datos, por favor")
                event.preventDefault();
            } else {


                let parametros = {

                    "imagen": 'http://192.168.6.192/PhotoAlmi/web/source/image/' + nombreDocumento,
                    "pregunta": pregunta,
                    "respuestas": [{
                            "respuesta": respuesta1,
                            "correcta": $('#check1').is(':checked')
                        },
                        {
                            "respuesta": respuesta2,
                            "correcta": $('#check2').is(':checked')
                        },
                        {
                            "respuesta": respuesta3,
                            "correcta": $('#check3').is(':checked')
                        },
                        {
                            "respuesta": respuesta4,
                            "correcta": $('#check4').is(':checked')
                        }
                    ],
                    "correccion": explicacion,
                    "numAciertos": 0
                };

                //----------------------------------AJAX----------------------------------
                //OBTENER TODAS LAS PREGUNTAS DE MONGODB  
                $.ajax({
                    data: parametros,
                    url: urlDB + "actualizar/" + categoria,
                    type: "put",
                    success: function(response) {
                        // console.log(response);
                        $(".formSubir").submit();
                    },

                });


            };


        }
    });

    console.log(idPregunta)

    $.ajax({
        url: urlDB + "contenido/" + idPregunta,
        type: "get",
        success: function(response) {
            let arrayCategorias = response.data;
            let htmlappend;
            htmlappend = "<label id='campoPregunta' for='question'>Pregunta: </label>";
            htmlappend += "<input type='text' id='question' name='question' placeholder='" + arrayCategorias[0].pregunta + "' />";
            htmlappend += "<br>";
            htmlappend += "<label id='campoCategoria' for='category'>Categoría: </label>";
            htmlappend += "<select id='comboCategoria'>";
            htmlappend += "</select>";
            htmlappend += "<br>";
            htmlappend += "<div id='respuesta'>";
            htmlappend += "<input type='checkbox' id='check1' name='check1' />";
            htmlappend += "<label id='campoRespuesta1' for='ans1'>Respuesta 1: </label>";
            htmlappend += "<input type='text' id='ans1' name='ans1' placeholder='" + arrayCategorias[0].respuesta[0] + "' />";
            htmlappend += "</div>";
            htmlappend += "<div id='respuesta'>";
            htmlappend += "<input type='checkbox' id='check2' name='check2' />";
            htmlappend += "<label id='campoRespuesta2' for='ans2'>Respuesta 2: </label>";
            htmlappend += "<input type='text' id='ans2' name='ans2' placeholder='" + arrayCategorias[0].respuesta[1] + "' />";
            htmlappend += "</div>";
            htmlappend += "<div id='respuesta'>";
            htmlappend += "<input type='checkbox' id='check3' name='check3' />";
            htmlappend += "<label id='campoRespuesta3' for='ans3'>Respuesta 3: </label>";
            htmlappend += "<input type='text' id='ans3' name='ans3' placeholder='" + arrayCategorias[0].respuesta[2] + "' />";
            htmlappend += "</div>";
            htmlappend += "<div id='respuesta'>";
            htmlappend += "<input type='checkbox' id='check4' name='check4' />";
            htmlappend += "<label id='campoRespuesta4' for='ans4'>Respuesta 4: </label>";
            htmlappend += "<input type='text' id='ans4' name='ans4' placeholder='" + arrayCategorias[0].respuesta[3] + "' />";
            htmlappend += "</div>";
            htmlappend += "<label id='campoExplicacion' for='expl'>Explicación: </label>";
            htmlappend += "<input type='text' id='expl' name='expl' placeholder='" + arrayCategorias[0].explicacion + "' />";

            $('#formularioEditarPregunta').append(htmlappend);


        },
    });
});