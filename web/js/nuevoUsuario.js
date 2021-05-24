$(document).ready(function() {
    console.log('Documento funcional!');
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    var urlHtml = 'http://192.168.6.151/PhotoAlmi/web/panelSuperUser.php';
    //----------------------------------AJAX---------------------------------------
    let htmlcombo = "<option value='0' selected='selected' disabled>Select an Option</option>";

    $.ajax({
        url: urlDB + 'puestos',
        type: 'get',
        success: function(response) {
            let arrTodo = response.data;

            arrTodo.forEach((puesto) => {
                htmlcombo += '<option value=' + puesto.id_puesto + '>' + puesto.descripcion + '</option>';
                $('#puesto').html(htmlcombo);
            });
        },
    });

    $(document).on('click', '#Add', function() {
        var error = false;

        $("#error2").hide('slow');

        var nombre = $('#usuario').val().trim();
        var apellido1 = $('#Apellido1').val().trim();
        var apellido2 = $('#Apellido2').val().trim();
        var dni = $('#userid').val().trim();
        var direccion = $('#direccion').val();
        var telefono = $('#telefono').val().trim();
        var puesto = $('#puesto').val();

        if (nombre == "") {
            error = true;
            $('#usuario').css("background-color", "#c82a2a")
        } else {
            $('#usuario').css("background-color", "white")

        }
        if (dni == "" || dni.length > 9) {
            error = true;
            $('#userid').css("background-color", "#c82a2a")

        } else {
            $('#userid').css("background-color", "white")

        }

        if (telefono == "" || telefono.length != 9) {
            error = true;
            $('#telefono').css("background-color", "#c82a2a")
        } else {
            $('#telefono').css("background-color", "white")
        }


        if (error == true) {
            $("#error2").slideDown('slow');
            return;
        }

        if (puesto == null) {
            $('#error').slideDown('slow');
        } else {
            var parametros = {
                nombre: nombre,
                apellido1: apellido1,
                apellido2: apellido2,
                dni: dni,
                direccion: direccion,
                telefono: telefono,
                puesto: puesto,
            };
            $.ajax({
                data: parametros,
                url: urlDB + 'altas',
                type: 'post',
                success: function(response) {
                    window.location.href = urlHtml;
                },
                error: function(err) {
                    $('#error2').slideDown('slow');
                },
            });
        }
    });
});