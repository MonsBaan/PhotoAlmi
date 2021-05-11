$(document).ready(function () {

    $(".panelOculto").hide();
    $(".close").hide();


    $("#editarDatosUsuario").click(function () {
        $(".panelModificar").hide();
        $(".panelOculto").show();
        $(".close").show();

    });

    $("#confirmarDatosUsuario").click(function (event) {
        if (!window.confirm("¿Guardar los datos modificados?")) {
            event.preventDefault();
        } else {
            $(".panelOculto").hide();
            $(".panelModificar").show();
            $(".close").hide();
        }

    });

    $(".close").click(function (event) {
        if (window.confirm("¿Cancelar los datos modificados?")) {
            $(".panelModificar").show();
            $(".panelOculto").hide();
        } else {
            event.preventDefault();

        }
    });

});
