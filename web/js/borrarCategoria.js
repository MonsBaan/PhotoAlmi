$(document).ready(function() {
    console.log('Documento funcional!');
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    

    $.ajax({
        url: urlDB + "preguntas",
        type: 'get',
        success: function (response) {
            datos = response.data;
            datos.forEach(categoria => {
                $('#categorias').append("<option value='"+categoria._id+"'>"+categoria.categoria+"</option>")
            });
        }
    });
    $('#remove').click(function(event){
        id = $('#categorias').val();
        $.ajax({
            url: urlDB + "contenido/"+id,
            type: "delete",
            success: function(response){
                window.location.href = "buscadorpreguntas.php";
            }
        })
    });






});