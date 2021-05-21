$(document).ready(function() {
    console.log("Documento Listo");
    var urlDB = "http://192.168.6.195:8080/kalmihootApi/";

    actualizarUsuarios();


    $("#recargarResultados").click(function() {
        actualizarUsuarios();
    });
    $(document).on('click', '#eliminar', function() {
        if (confirm("Estas seguro de eliminar este usuario?")) {
            id = $(this).parent().children('#idUser').text();
            console.log(id);
        }
    });
    $(document).on('click', '#editar', function() {
        $('#puesto').html("");

        id = $(this).parent().children('#idUser').text();
        console.log(id);

        $.get(urlDB + "trabajadores/" + id, function(response) {
            usuario = response.data;
            $('#name').attr("placeholder", usuario.nombre);
            $('#surname1').attr("placeholder", usuario.apellido1);
            $('#surname2').attr("placeholder", usuario.apellido2);
            $('#userId').attr("placeholder", usuario.dni);
            $('#address').attr("placeholder", usuario.direccion);
            $('#phone').attr("placeholder", usuario.telefono);
            $("#tablaUsers").hide();
            $("#accionesGeneral").hide();
            $("#formulario").show();

            $.get(urlDB + "puestos", function(response) {
                console.log(response.data)
                datos = response.data
                tamDatos = datos.length
                html = ""

                datos.forEach(puesto => {
                    html = "<option value='" + puesto.id_puesto + "'>" + puesto.descripcion + "</option>";
                    $('#puesto').append(html);

                });
            });
        });



    });
    $(document).on('click', '.close', function() {
        if (confirm("Cancelar los datos modificados? ")) {
            $("#tablaUsers").show();
            $("#accionesGeneral").show();
            $("#formulario").hide();
        }
    });
    function actualizarUsuarios() {
        let html = "";

        html += "<tr>";
        html += "<th>ID</th>";
        html += "<th>Name</th>";
        html += "<th>Surnames</th>";
        html += "<th>Personal Id</th>";
        html += "<th>Address</th>";
        html += "<th>Phone Number</th>";
        html += "<th>Charge</th>";
        html += "</tr>";

        $.ajax({
            url: urlDB + "trabajadores",
            type: "get",
            success: function(response) {
                let arrayDatos = response.data;
                arrayDatos.forEach(trabajador => {
                    html += "<tr>";
                    html += "<td id='idUser'>" + trabajador.id_trabajador + "</td>";
                    html += "<td>" + trabajador.nombre + "</td>";
                    html += "<td>" + trabajador.apellido1 + " " + trabajador.apellido2 + "</td>";
                    html += "<td>" + trabajador.dni + "</td>";
                    html += "<td>" + trabajador.direccion + "</td>";
                    html += "<td>" + trabajador.telefono + "</td>";
                    html += "<td>" + trabajador.descripcion + "</td>";
                    html += "<td id='editar' ><img src='source/image/editar.png' alt='Imagen Recargar' class='imagenPanel'></img></td>"
                    html += "<td id='eliminar'><img src='source/image/papelera.png' alt='Imagen Recargar' class='imagenPanel'></img></td>"
                    html += "</tr>";
                });
                $("#tablaUsers").html(html);

            }
        });
    }
    
});