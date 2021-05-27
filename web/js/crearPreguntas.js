$(document).ready(function() {
    console.log("Documento Cargado");
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    var controlCheck = false;

    //CONTROL DE CHECKS
    $("input[type='checkbox']").on('change', function() {
        $(this).attr('value', 'false');
        if ($("#check1").is(':checked')) {
            $("#check1").attr('value', 'true');
            controlCheck = true;
        }
        if ($("#check2").is(':checked')) {
            $("#check2").attr('value', 'true');
            controlCheck = true;

        }
        if ($("#check3").is(':checked')) {
            $("#check3").attr('value', 'true');
            controlCheck = true;
        }
        if ($("#check4").is(':checked')) {
            $("#check4").attr('value', 'true');
            controlCheck = true;

        }

    });


    $('#fileToUpload').change(function() {
        const [file] = fileToUpload.files
        if (file) {
            imagen.src = URL.createObjectURL(file)
        }

    })


    //GET CATEGORIAS
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

    //CLICK SUBIR PREGUNTA
    $("#botonPregunta").click(function(event) {
        event.preventDefault();

        let categoria = $("#comboCategoria").val();

        var pregunta = $("#question").val();
        var respuesta1 = $("#ans1").val();
        var respuesta2 = $("#ans2").val();
        var respuesta3 = $("#ans3").val();
        var respuesta4 = $("#ans4").val();
        var explicacion = $("#expl").val();


        $('#myModal').css('display', 'block');
        $('.modal-content > p').text('¿You want to upload this question?');
        //aceptar
        $('#aceptar').click(function() {
            var error = false;
            var formData = new FormData();
            var files = $('#fileToUpload')[0].files[0];
            formData.append('file', files);
            var parametros
                //SUBE LA IMAGEN
            $.ajax({
                url: 'php/subirImagen.php',
                type: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                    imagen = response;
                    if (pregunta | respuesta1 | respuesta2 | explicacion == "" | controlCheck == false) {
                        $('#myModal').css('display', 'block');
                        $('.modal-content > p').text('Inserted Data is invalid');
                        event.preventDefault();
                        return;
                    } else {
                        if (respuesta3 == "") {
                            parametros = {
                                "imagen": 'http://192.168.6.151/PhotoAlmi/web/source/image/preguntas/' + imagen,
                                "pregunta": pregunta,
                                "respuestas": [{
                                        "respuesta": respuesta1,
                                        "correcta": $('#check1').is(':checked')
                                    },
                                    {
                                        "respuesta": respuesta2,
                                        "correcta": $('#check2').is(':checked')
                                    },
                                ],
                                "correccion": explicacion,
                                "numAciertos": 0
                            };
                        } else if (respuesta4 == "") {
                            parametros = {
                                "imagen": 'http://192.168.6.151/PhotoAlmi/web/source/image/preguntas/' + imagen,
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
                                ],
                                "correccion": explicacion,
                                "numAciertos": 0
                            };
                        } else {
                            parametros = {
                                "imagen": 'http://192.168.6.151/PhotoAlmi/web/source/image/preguntas/' + imagen,
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
                        }


                        $.ajax({
                            data: parametros,
                            url: urlDB + "actualizar/" + categoria,
                            type: "put",
                            success: function(response) {
                                document.location.href = './buscadorpreguntas.php';



                            },
                        });


                    };

                },
            });













            //COMPROBAR SI TODOS LOS CAMPOS ESTÁN COMPLETOS


            $('#myModal').css('display', 'none');

        });

        $('#cancelar').click(function() {
            event.preventDefault()
            $('#myModal').css('display', 'none');
        });
    });
});