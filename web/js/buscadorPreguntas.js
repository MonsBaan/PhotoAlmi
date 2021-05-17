$(document).ready(function() {
    console.log("Documento Listo");
    var urlDB = "http://192.168.6.195:8080/kalmihootApi/preguntas";

    //----------------------------------AJAX----------------------------------
    //OBTENER TODAS LAS PREGUNTAS DE MONGODB  
    $.ajax({
        url: urlDB,
        type: "get",
        success: function(response) {
            console.log(response);
            let arrPreguntas = response.data[0]['preguntas'];
            let htmlappend = "<tr>";
            htmlappend += "<th>ID</th>";
            htmlappend += "<th>PREGUNTA</th>";
            htmlappend += "<th>CATEGORIA</th>";
            htmlappend += "<th>ACIERTOS</th>";
            htmlappend += "<th>EDITAR</th>";
            htmlappend += "<th>ELIMINAR</th>";
            htmlappend += "</tr>";
            for (let i = 0; i < arrPreguntas.length; i++) {
                htmlappend += "<tr>";
                htmlappend += "<td>" + i + "</td>";
                htmlappend += "<td>" + arrPreguntas[i].pregunta + "</td>";
                htmlappend += "<td>" + response.data[0]['categoria'] + "</td>";
                htmlappend += "<td>" + arrPreguntas[i].numAciertos + "</td>";
                htmlappend += "<td><input type='button' href='editarpreguntas.php' value='Editar' id='EditarPreguntas' /></td>";
                htmlappend += "<td><input type='button' value='Eliminar' id='EliminarPreguntas' /></td>";
                htmlappend += "</tr>";
            }

            $('#tablaPreguntas').append(htmlappend);

        },
    });
    //----------------------------------EVENTOS JS----------------------------------
    $(document).on("click", "#EditarPreguntas", function() {
        window.location.href = 'http://localhost/PhotoAlmi/web/editarpreguntas.php';

    })
    $("#filtro").on("change textInput input", function() {
        var textoFiltro = $("#filtro").val().toLowerCase();
        var campoFiltrar = $("#categorias").val();

        var resto = 0;
        if (campoFiltrar == "FOL") {
            resto = 0;
        } else if (campoFiltrar == "categoria2") {
            resto = 1;
        } else if (campoFiltrar == "categoria3") {
            resto = 2;
        }

        $("#tablaPreguntas td").each(function() {
            // if(index % 8 == resto)
            //{
            var texto = $(this).text().toLowerCase();
            if (!texto.includes(textoFiltro.toLowerCase())) {
                $(this).parent("tr").hide();
            } else {
                $(this).parent("tr").show();
            }
            console.log(textoFiltro);
            // }
        });
    });
});