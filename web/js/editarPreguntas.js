$(document).ready(function() {
    var nombreDocumento = "0";

    $(document).on('change', "input[type='file']", function() {
        if ($(this).val()) {
            var filename = $(this).val().split("\\");
            nombreDocumento = filename = filename[filename.length - 1];
            $('.fileName').text(filename);
        }

    });

    $("#botonPregunta").click(function(event) {

        var imagen = $("#campoIMG").val();
        var pregunta = $("#question").val();


        //CONTROLAR SI SE SELECCIONA UN CHECKBOX
        var checkbox = $("#checkbox").val();

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
            }


            $('#formularioEditarPregunta').ready(function() {
                console.log("Documento Listo");
                var urlDB = "http://192.168.6.195:8080/kalmihootApi/nuevas";

                let parametros = {

                }

                //----------------------------------AJAX----------------------------------
                //OBTENER TODAS LAS PREGUNTAS DE MONGODB  
                $.ajax({
                    data: parametros,
                    url: urlDB,
                    type: "post",
                    success: function(response) {
                        console.log(response);


                    },
                });

            });
        };
    });



});