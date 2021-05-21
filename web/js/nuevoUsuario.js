$(document).ready(function () {
	console.log('Documento funcional!');
	var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
	//----------------------------------AJAX---------------------------------------
	let htmlcombo = "<option value='estalman'>Everything...</option>";

	$.ajax({
		url: urlDB + 'puestos',
		type: 'get',
		success: function (response) {
			let arrTodo = response.data;

			arrTodo.forEach((puesto) => {
				htmlcombo += '<option value=' + puesto.id_puesto + '>' + puesto.descripcion + '</option>';
				$('#puesto').html(htmlcombo);
			});
		},
	});

	$(document).on('click', '#Add', function () {
		var nombre = $('#usuario').val();
		var apellido1 = $('#Apellido1').val();
		var apellido2 = $('#Apellido2').val();
		var dni = $('#userid').val();
		var direccion = $('#direccion').val();
		var telefono = $('#telefono').val();
		var puesto = $('#puesto').val();
		if (puesto == 'estalman') {
			$('#error').slideDown('slow');
		} else {
			var parametros = {
				nombre: nombre,
				apellido1: apellido1,
				apellido2: apellido2,
				dni: dni,
				direccion: direccion,
				telefono: telefono,
				puesto: puesto,
			};
			console.log(parametros);
			$.ajax({
				data: parametros,
				url: urlDB + 'altas',
				type: 'post',
				success: function (response) {
                    window.location.href = 'http://192.168.6.157/PhotoAlmi/web/panelSuperUser.php';
				},
				error: function (err) {
                    $('#errorTop').slideDown('slow');
				},
			});
		}
	});
});
