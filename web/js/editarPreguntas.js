$(document).ready(function() {
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    var nombreDocumento = "0";

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



    $(document).on('change', "input[type='file']", function() {
        if ($(this).val()) {
            var filename = $(this).val().split("\\");
            nombreDocumento = filename = filename[filename.length - 1];
            $('.fileName').text(filename);
        }

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

        var imagen = $("#campoIMG").val();

        var pregunta = $("#question").val();

        let categoria = $("#comboCategoria").val();

        //CONTROLAR SI SE SELECCIONA UN CHECKBOX
        var checkbox = $("input[type='checkbox']").val();

        var respuesta1 = $("#ans1").val();
        var respuesta2 = $("#ans2").val();
        var respuesta3 = $("#ans3").val();
        var respuesta4 = $("#ans4").val();

        var explicacion = $("#expl").val();



        if (!window.confirm("¿Enviar pregunta?")) {
            event.preventDefault();
        } else {

            //COMPROBAR SI TODOS LOS CAMPOS ESTÁN COMPLETOS
            if (nombreDocumento == "0" | pregunta | respuesta1 | respuesta2 | respuesta3 | respuesta4 | explicacion == "") {
                window.confirm("Rellena todos los datos, por favor")
                event.preventDefault();
            } else {
                let parametros = {
                    "categoria": categoria,
                    "preguntas": [{
                        "imagen": 'http://192.168.6.192/PhotoAlmi/web/source/image/' + imagen,
                        "pregunta": pregunta,
                        "respuestas": [{
                                "respuesta": respuesta1,
                                "correcta": $("check1").val()
                            },
                            {
                                "respuesta": respuesta2,
                                "correcta": $("check2").val()
                            },
                            {
                                "respuesta": respuesta3,
                                "correcta": $("check3").val()
                            },
                            {
                                "respuesta": respuesta4,
                                "correcta": $("check4").val()
                            }
                        ],
                        "correccion": explicacion,
                        "numAciertos": 0
                    }]
                };


                //----------------------------------AJAX----------------------------------
                //OBTENER TODAS LAS PREGUNTAS DE MONGODB  
                $.ajax({
                    data: parametros,
                    url: urlDB + "nuevas",
                    type: "post",
                    success: function(response) {
                        console.log(response);


                    },
                });


            };


        }
    });
});