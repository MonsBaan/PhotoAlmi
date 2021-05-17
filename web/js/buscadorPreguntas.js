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
            let htmlappend = "<tr>";
            htmlappend += "<th>ID</th>";
            htmlappend += "<th>PREGUNTA</th>";
            htmlappend += "<th>CATEGORIA</th>";
            htmlappend += "<th>ACIERTOS</th>";
            htmlappend += "<th>EDITAR</th>";
            htmlappend += "<th>ELIMINAR</th>";
            htmlappend += "</tr>";
            let arrTodo = response.data;
            for (let i = 0; i < arrTodo.length; i++) {
                let arrPreguntas = response.data[i]['preguntas'];

                for (let j = 0; j < arrPreguntas.length; j++) {
                    htmlappend += "<tr>";
                    htmlappend += "<td>" + j + "</td>";
                    htmlappend += "<td>" + arrPreguntas[j].pregunta + "</td>";
                    htmlappend += "<td>" + response.data[i]['categoria'] + "</td>";
                    htmlappend += "<td>" + arrPreguntas[j].numAciertos + "</td>";
                    htmlappend += "<td><input type='button' href='editarpreguntas.php' value='Editar' id='EditarPreguntas' /></td>";
                    htmlappend += "<td><input type='button' value='Eliminar' id='EliminarPreguntas' /></td>";
                    htmlappend += "</tr>";
                }
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