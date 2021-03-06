$(document).ready(function() {
    console.log('Documento funcional!');
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';

    $.ajax({
        url: urlDB + "preguntas",
        type: 'get',
        success: function(response) {
            datos = response.data;
            datos.forEach(categoria => {
                $('#categorias').append("<option value='" + categoria._id + "'>" + categoria.categoria + "</option>")
            });
        }
    });

    $('#remove').click(function(event) {
        event.preventDefault();
        $('#myModal').css('display', 'block');
        $('.modal-content > p').text("Are you sure that you want to remove this category and it's content?");
        //aceptar
        $('#aceptar').click(function() {

            id = $('#categorias').val();
            $.ajax({
                url: urlDB + "contenido/" + id,
                type: "delete",
                success: function(response) {
                    swal({
                        title: "The Category Has Been Removed!",
                        text: "          ",
                        type: "success",
                        timer: 1500,
                        button: false,
                        icon: "success",

                    }).then(() => window.location.href = "buscadorpreguntas.php");
                }
            })

            $('#myModal').css('display', 'none');

        });

        $('#cancelar').click(function() {
            event.preventDefault()
            return;
            $('#myModal').css('display', 'none');
        });

    });

});