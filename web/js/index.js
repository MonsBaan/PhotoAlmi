var estado = 1;
$(document).ready(function() {
    console.log("Documento Listo");
    $('#eye').click(function() {

        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#password').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#password').attr('type', 'password');
        }
    });
    $("#FormularioLogin").submit(function(event) {
        $("#FormularioLogin input");
        //COMPROBAR QUE EL USUARIO EXISTE
        if (estado != 0) {
            event.preventDefault();
            mensajeError += "Este usuario no existe";
            $("#mensajeError > p").text(mensajeError);
            $("#mensajeError").show();

        }
    });
});

function check_username() {
    //USUARIO NO REPETIDO 
    var username = $('#user').val();
    jQuery.ajax({
        type: 'POST',
        url: 'http://127.0.0.1/web/check_username.php',
        data: 'username=' + username,
        cache: false,
        success: function(response) {
            if (response != 0) {
                estado = 0
            }
        }
    });

}