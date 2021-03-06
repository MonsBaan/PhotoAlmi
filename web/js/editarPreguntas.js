$(document).ready(function() {
    console.log("Documento Cargado");
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    var nombreDocumento = "0";
    var controlCheck = "1";

    var idPregunta = $('#campoPregunta2').val();
    var idCategoria
    var imagenPregunta

    $.ajax({
        url: urlDB + "preguntas",
        type: 'get',
        success: function(response) {
            datos = response.data;
            datos.forEach(categoria => {
                arrayPreguntas = categoria.preguntas
                arrayPreguntas.forEach(pregunta => {
                    if (pregunta._id == idPregunta) {
                        idCategoria = categoria._id
                        imagenPregunta = pregunta.imagen;
                        console.log(pregunta);
                        $("#question").val(pregunta.pregunta);
                        $("#ans1").val(pregunta.respuestas[0].respuesta);
                        $("#ans2").val(pregunta.respuestas[1].respuesta);


                        try {
                            $("#ans3").val(pregunta.respuestas[2].respuesta);
                            $("#ans4").val(pregunta.respuestas[3].respuesta);
                        } catch (error) {

                        }

                        $("#expl").val(pregunta.correccion);
                        $('#imagen').attr('src', imagenPregunta)
                        if (pregunta.respuestas[0].correcta) {
                            $('#check1').prop('checked', true);
                        }
                        if (pregunta.respuestas[1].correcta) {
                            $('#check2').prop('checked', true);

                        }

                        try {
                            if (pregunta.respuestas[2].correcta) {
                                $('#check3').prop('checked', true);

                            }
                            if (pregunta.respuestas[3].correcta) {
                                $('#check4').prop('checked', true);

                            }
                        } catch (error) {

                        }

                        return;
                    }
                });
            });
        }
    });

    $('#fileToUpload').change(function() {
        const [file] = fileToUpload.files
        if (file) {
            imagen.src = URL.createObjectURL(file)
        }

    })

    //CONTROL DE CHECKS
    $("input[type='checkbox']").on('change', function() {
        $(this).attr('value', 'false');
        if ($("#check1").is(':checked')) {
            $("#check1").attr('value', 'true');

        }
        if ($("#check2").is(':checked')) {
            $("#check2").attr('value', 'true');

        }
        if ($("#check3").is(':checked')) {
            $("#check3").attr('value', 'true');
        }
        if ($("#check4").is(':checked')) {
            $("#check4").attr('value', 'true');


        }

    });
    $(document).on('change', "input[type='file']", function(event) {
        if ($(this).val()) {
            var filename = $(this).val().split("\\");
            nombreDocumento = filename = filename[filename.length - 1];
            $('.fileName').text(filename);
        }
    });

    //CLICK SUBIR PREGUNTA
    $("#botonPregunta").click(function(event) {
        event.preventDefault();

        var pregunta = $("#question").val();
        var respuesta1 = $("#ans1").val();
        var respuesta2 = $("#ans2").val();
        var respuesta3 = $("#ans3").val();
        var respuesta4 = $("#ans4").val();
        var explicacion = $("#expl").val();
        var parametros;

        if ($('#fileToUpload').val() == "") {
            if (respuesta3 == "") {
                parametros = {
                    "imagen": imagenPregunta,
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
                    "imagen": imagenPregunta,
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
                    "imagen": imagenPregunta,
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
                url: urlDB + "actualizar/pregunta/" + idCategoria + "/" + idPregunta,
                type: "put",
                success: function(response) {
                    document.location.href = './buscadorpreguntas.php';



                },
            });
        } else {
            var error = false;
            var formData = new FormData();
            var files = $('#fileToUpload')[0].files[0];
            formData.append('file', files);

            $('#myModal').css('display', 'block');
            $('.modal-content > p').text('The Changes Have Been Saved!');
            //aceptar
            $('#aceptar').click(function() {
                //SUBE LA IMAGEN
                $.ajax({
                    url: 'php/subirImagen.php',
                    type: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        imagen = response;
                        if (nombreDocumento == "0" | pregunta | respuesta1 | respuesta2 | explicacion == "" | controlCheck == "0") {
                            $('#myModal').css('display', 'block');
                            $('.modal-content > p').text('Fill All The Gaps');
                            event.preventDefault();
                        } else {
                            if (respuesta3 == "") {
                                parametros = {
                                    "imagen": "http://192.168.6.151/PhotoAlmi/web/source/image/preguntas/" + imagen,
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
                                    "imagen": "http://192.168.6.151/PhotoAlmi/web/source/image/preguntas/" + imagen,
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
                                    "imagen": "http://192.168.6.151/PhotoAlmi/web/source/image/preguntas/" + imagen,
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
                                url: urlDB + "actualizar/pregunta/" + idCategoria + "/" + idPregunta,
                                type: "put",
                                success: function(response) {
                                    swal({
                                        title: "The Category Has Been Removed!",
                                        text: "          ",
                                        type: "success",
                                        timer: 1500,
                                        button: false,
                                        icon: "success",

                                    }).then(() => document.location.href = './buscadorpreguntas.php');

                                },
                            });


                        };

                    },
                });

                //COMPROBAR SI TODOS LOS CAMPOS EST??N COMPLETOS


                $('#myModal').css('display', 'none');

            });

            $('#cancelar').click(function() {
                event.preventDefault()
                $('#myModal').css('display', 'none');
                return;

            });

        }

    });
});