$(document).ready(function () {

    $("#botonPregunta").click(function (event) {

        var imagen = $("#file").val();
        var pregunta = $("#question").val();

        //CONTROLAR SI SE SELECCIONA UN CHECKBOX
        var checkbox = $("#checkbox").val();

        var respuesta1 = $("#ans1").val();
        var respuesta2 = $("#ans2").val();
        var respuesta3 = $("#ans3").val();
        var respuesta4 = $("#ans4").val();

        var explicacion = $("#expl").val();

    
        if(imagen, pregunta, respuesta1, respuesta2, respuesta3, respuesta4 & explicacion == null) 
        {
            const boton = document.querySelector('button')

            button.disabled = true
        }


        if (!window.confirm("¿Enviar pregunta?")) {
            event.preventDefault();
        } else {

            //COMPROBAR SI TODOS LOS CAMPOS ESTÁN COMPLETOS

            
            //AJAX ENVIO DE DATOS

        }

    });



});
