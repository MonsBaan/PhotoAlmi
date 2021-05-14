$(document).ready(function () {
  console.log("Documento Listo");
  var urlDB = "http://192.168.6.195:8080/kalmihootApi/preguntas/fol";

  //----------------------------------AJAX----------------------------------
  //OBTENER TODAS LAS PREGUNTAS DE MONGODB  
  $.ajax({
    url: urlDB,
    type: "get",
    success: function (response) {
    console.log(response);
    },
  });
  //----------------------------------EVENTOS JS----------------------------------
  $("#filtro").on("change textInput input", function () {
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

    $("#tablaPreguntas td").each(function () {
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
