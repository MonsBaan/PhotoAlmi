$(document).ready(function () {
  console.log("Documento Listo");
  var urlDB = "http://localhost/PhotoAlmi/web/php/ajax.php";
  //----------------------------------AJAX----------------------------------
  //FUNCION DE LOGIN
  $("#FormularioLogin").submit(function (event) {
    var nombreUser = $("#user").val();
    var passUser = $("#password").val();
    var parametros = {
      nombre: nombreUser,
      contrasena: passUser,
      function: "getUser",
    };

    $.ajax({
      data: parametros,
      url: urlDB,
      type: "post",
      success: function (response) {},
    });
  });

  //----------------------------------EVENTOS JS----------------------------------
  //FUNCION DEL OJO
  $("#eye").click(function () {
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
