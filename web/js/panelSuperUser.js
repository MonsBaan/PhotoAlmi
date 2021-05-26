$(document).ready(function() {
    console.log('Documento Listo');
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';

    actualizarUsuarios();
    $('#recargarResultados').click(function() {
        actualizarUsuarios();
    });
    //IMAGEN EFECTO ROTACION
    $(document).on('click', '#theimage', function() {
        $(this)
            .addClass('imageRot')
            .one('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function() {
                $(this).removeClass('imageRot'); //remove anim class
                var url = $(this).data('linkurl'); //get url from data-attribute
                $(':mobile-pagecontainer').pagecontainer('change', url); //navigate to page
            });
    });
    $(document).on('click', '#eliminar', function() {
        id = $(this).parent().children('#idUser').text();
        $('#myModal').css('display', 'block');

        $('#aceptar').click(function() {

            $.ajax({
                url: urlDB + 'trabajadores/' + id,
                type: 'DELETE',
                success: function(resultado) {
                    actualizarUsuarios();
                },
            });
            $('#myModal').css('display', 'none');
        });

        $('#cancelar').click(function() {
            $('#myModal').css('display', 'none');
        });


    });

    $(document).on('click', '#editar', function() {
        $('#puesto').html('');

        id = $(this).parent().children('#idUser').text();

        $.get(urlDB + 'trabajadores/' + id, function(response) {
            usuario = response.data;
            $('#name').attr('placeholder', usuario.nombre);
            $('#surname1').attr('placeholder', usuario.apellido1);
            $('#surname2').attr('placeholder', usuario.apellido2);
            $('#userId').attr('placeholder', usuario.dni);
            $('#address').attr('placeholder', usuario.direccion);
            $('#phone').attr('placeholder', usuario.telefono);
            $('#tablaUsers').hide();
            $('#accionesGeneral').hide();
            $('#formulario').show();

            $.get(urlDB + 'puestos', function(response) {
                datos = response.data;
                let htmlcombo = "<option value='0' selected='selected' disabled>Select an Option</option>";
                $('#puesto').html(htmlcombo);
                datos.forEach((puesto) => {
                    html = "<option value='" + puesto.id_puesto + "'>" + puesto.descripcion + '</option>';
                    $('#puesto').append(html);
                });
                $('#puesto').val(usuario.puesto);
                $('#confirmarDatosUsuario').click(function(response) {
                    let error = false;
                    let nombre = $('#name').val().trim();
                    let apellido1 = $('#surname1').val().trim();
                    let apellido2 = $('#surname2').val().trim();
                    let dni = $('#userId').val().trim();
                    let direccion = $('#address').val().trim();
                    let telefono = $('#phone').val().trim();
                    let pass = $('#password').val().trim();
                    let repass = $('#repassword').val().trim();
                    let puesto = $('#puesto').val();

                    if (nombre == '') {
                        nombre = $('#name').attr('placeholder');
                    }
                    if (apellido1 == '') {
                        apellido1 = $('#surname1').attr('placeholder');
                    }
                    if (apellido2 == '') {
                        apellido2 = $('#surname2').attr('placeholder');
                    }
                    if (dni == '') {
                        dni = $('#userId').attr('placeholder');
                    }
                    if (direccion == '') {
                        direccion = $('#address').attr('placeholder');
                    }
                    if (telefono == '') {
                        telefono = $('#phone').attr('placeholder');
                    }
                    if (pass == '') {
                        pass = usuario.contrasena;
                        repass = pass;
                    }
                    if (puesto == null) {
                        $('#puesto').css('background-color', '#c82a2a');
                        error = true;
                    } else {
                        $('#puesto').css('background-color', 'white');
                    }

                    if (pass != repass) {
                        $('#repassword').css('background-color', '#c82a2a');
                        error = true;
                    } else {
                        $('#repassword').css('background-color', 'white');
                    }
                    if (error == true) {
                        return;
                    } else {
                        let parametros = {
                            nombre: nombre,
                            apellido1: apellido1,
                            apellido2: apellido2,
                            dni: dni,
                            direccion: direccion,
                            telefono: telefono,
                            contrasena: pass,
                            puesto: puesto,
                            imagen: usuario.imagen,
                            id_trabajador: id,
                        };

                        $.ajax({
                            data: parametros,
                            type: 'put',
                            url: urlDB + 'trabajadores/' + id,
                            success: function(response) {
                                $('#tablaUsers').show();
                                $('#accionesGeneral').show();
                                $('#formulario').hide();
                            },
                        });
                        actualizarUsuarios();
                    }
                });
            });
        });
    });
    $(document).on('click', '.close', function() {


        $('#myModal').css('display', 'block');
        $('.modal-content > p').text('¿Enviar pregunta?');


        $('#aceptar').click(function() {
            $('#tablaUsers').show();
            $('#accionesGeneral').show();
            $('#formulario').hide();
            $('#name').val('');
            $('#surname1').val('');
            $('#surname2').val('');
            $('#userId').val('');
            $('#address').val('');
            $('#phone').val('');
            $('#password').val('');
            $('#repassword').val('');
            $('#puesto').val('');

            $('#myModal').css('display', 'none');
        });
    });

    $('#cancelar').click(function() {
        $('#myModal').css('display', 'none');
    });


    function actualizarUsuarios() {
        let html = '';

        html += '<tr>';
        html += '<th>ID</th>';
        html += '<th>Name</th>';
        html += '<th>Surnames</th>';
        html += '<th>Personal Id</th>';
        html += '<th>Address</th>';
        html += '<th>Phone Number</th>';
        html += '<th>Charge</th>';
        html += '</tr>';

        $.ajax({
            url: urlDB + 'trabajadores',
            type: 'get',
            success: function(response) {
                let arrayDatos = response.data;
                arrayDatos.forEach((trabajador) => {
                    html += '<tr>';
                    html += "<td id='idUser'>" + trabajador.id_trabajador + '</td>';
                    html += '<td>' + trabajador.nombre + '</td>';
                    html += '<td>' + trabajador.apellido1 + ' ' + trabajador.apellido2 + '</td>';
                    html += '<td>' + trabajador.dni + '</td>';
                    html += '<td>' + trabajador.direccion + '</td>';
                    html += '<td>' + trabajador.telefono + '</td>';
                    html += '<td>' + trabajador.descripcion + '</td>';
                    html +=
                        "<td id='editar' ><img id='imageeditar'src='source/image/editarN.png' alt='Imagen Recargar' class='imagenPanel'></img></td>";
                    html +=
                        "<td id='eliminar'><img id='imageeliminar' src='source/image/papeleraN.png' alt='Imagen Recargar' class='imagenPanel'></img></td>";
                    html += '</tr>';
                });
                $('#tablaUsers').html(html);
            },
        });
    }
});