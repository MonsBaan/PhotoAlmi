var estado = 1;
$(document).ready(function () {
  console.log("Documento Listo");
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
  $("#FormularioLogin").submit(function (event) {
    var nombreUser = $("#user").val();
    var passUser = $("#password").val();

    var parametros = {
      "nombre": nombreUser,
      "contrasena": passUser,
      "function": "getUser"
    };
    
    $.ajax({
      data: parametros,
      url: "http://192.168.50.28/PhotoAlmi/web/php/ajax.php",
      type: "post",
      success: function (response) {},
    });
  });
});
