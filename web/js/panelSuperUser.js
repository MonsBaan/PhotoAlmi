$(document).ready(function() {
    console.log("Documento Listo");
    var urlDB = "http://192.168.6.195:8080/kalmihootApi/trabajadores";

    actualizarUsuarios();

    $("#añadirUsuario").click(function() {
        console.log("Click Añadir Usuario");
    });
    $("#recargarResultados").click(function() {
        actualizarUsuarios();
    });
    $(document).on('click', '#eliminar', function() {
        if (confirm("Estas seguro de eliminar este usuario?")) {
            id = $(this).parent().child('#idUser');
            console.log(id);
        } else {
            console.log("No");
        }
    });

    function actualizarUsuarios() {
        let html = "";

        html += "<tr>";
        html += "<th id='idUser'>ID</th>";
        html += "<th>Name</th>";
        html += "<th>Surnames</th>";
        html += "<th>Personal Id</th>";
        html += "<th>Address</th>";
        html += "<th>Phone Number</th>";
        html += "<th>Charge</th>";
        html += "</tr>";

        $.ajax({
            url: urlDB,
            type: "get",
            success: function(response) {
                let arrayDatos = response.data;
                arrayDatos.forEach(trabajador => {
                    html += "<tr>";
                    html += "<td>" + trabajador.id_trabajador + "</td>";
                    html += "<td>" + trabajador.nombre + "</td>";
                    html += "<td>" + trabajador.apellido1 + " " + trabajador.apellido2 + "</td>";
                    html += "<td>" + trabajador.dni + "</td>";
                    html += "<td>" + trabajador.direccion + "</td>";
                    html += "<td>" + trabajador.telefono + "</td>";
                    html += "<td>" + trabajador.descripcion + "</td>";
                    html += "<td><img src='source/image/editar.png' alt='Imagen Recargar' class='imagenPanel' id='editar'></img></td>"
                    html += "<td id='eliminar'><img src='source/image/papelera.png' alt='Imagen Recargar' class='imagenPanel'></img></td>"
                    html += "</tr>";
                });
                $("#tablaUsers").html(html);

            }
        });

    }
});