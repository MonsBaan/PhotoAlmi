$(document).ready(function () {
console.log ("Documento funcional!")
var urlDB = 'http://192.168.6.195:8080/kalmihootApi/puestos';
//----------------------------------AJAX---------------------------------------
let htmlcombo = "<option value='selected'>Everything...</option>";

$.ajax({
    url: urlDB,
    type: 'get',
    success: function (response) {
        let arrTodo = response.data;

        arrTodo.forEach(puesto => {
            htmlcombo += 
            '<option value=' +
            puesto.id_puesto +
            '>' +
            puesto.descripcion +
            '</option>';
            $('#puesto').html(htmlcombo);
        });
    }
});
//----------------------------------EVENTOS JS----------------------------------
    //FUNCION DEL OJO
    $("#eye").click(function() {
        if ($(this).hasClass("fa-eye-slash")) {
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
            $("#password").attr("type", "text");
        } else {
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
            $("#password").attr("type", "password");
        }
    });




























});