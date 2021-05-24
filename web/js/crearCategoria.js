$(document).ready(function() {
    console.log('Documento funcional!');
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    
    //----------------------------------AJAX---------------------------------------

    $(document).on('click', '#Add', function(event) {
        event.preventDefault();
        var error = false;
        $("#error").hide('slow');

        var categoria = $('#categoria').val().trim();

        if (categoria == "") {
            error = true;
            $('#categoria').css("background-color", "#c82a2a")
        } else {
            $('#categoria').css("background-color", "white")

        }

        if (error == true) {
            $("#error").slideDown('slow');
            return;
        } else {
            let parametros = {
                "categoria": categoria
            };
            $.ajax({
                data: parametros,
                url: urlDB + "nuevas",
                type: "post",
                success: function(response) {
                    $("#formularioCrearUsuario").submit();
                },

            });

        }
    });












});