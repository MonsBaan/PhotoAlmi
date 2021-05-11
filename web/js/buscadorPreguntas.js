$(document).ready(function () {

    $("#filtro").on("change textInput input",function()
  {
    var textoFiltro = $("#filtro").val().toLowerCase();
    var campoFiltrar = $("#categorias").val();

    var resto = 0;
    if(campoFiltrar == "FOL")
    {
      resto = 0;
    } else if(campoFiltrar == "categoria2")
    {
      resto = 1;
    } else if(campoFiltrar == "categoria3")
    {
      resto = 2;
    }
    


    $("#tablaPreguntas td").each(function()
    {
     // if(index % 8 == resto)
      //{
        var texto = $(this).text().toLowerCase();
        if(!texto.includes(textoFiltro.toLowerCase()))
        {
          $(this).parent('tr').hide();
        } else {
          $(this).parent('tr').show();
        }
        console.log(textoFiltro);
     // }
    });
    
    
});
});