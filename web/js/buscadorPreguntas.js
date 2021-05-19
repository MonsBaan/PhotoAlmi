comprobarFiltrar = ''
$(document).ready(function () {
	console.log('Documento Listo');
	var urlDB = 'http://192.168.6.195:8080/kalmihootApi/preguntas';

	//----------------------------------AJAX----------------------------------
	//OBTENER TODAS LAS PREGUNTAS DE MONGODB
	$.ajax({
		url: urlDB,
		type: 'get',
		success: function (response) {
			console.log(response);

			let htmlappend = '<tr>';
			htmlappend += '<th>NUM</th>';
			htmlappend += '<th>PREGUNTA</th>';
			htmlappend += '<th>CATEGORIA</th>';
			htmlappend += '<th>ACIERTOS</th>';
			htmlappend += '<th>EDITAR</th>';
			htmlappend += '<th>ELIMINAR</th>';
			htmlappend += '</tr>';
			let arrTodo = response.data;
			//combo
			let htmlcombo = "<option value='selected'>Todo...</option>";
			let con = 1;
			let aux;
			for (let i = 0; i < arrTodo.length; i++) {
				//arr preguntas
				let arrPreguntas = response.data[i]['preguntas'];
				htmlcombo += '<option value='+ response.data[i]['categoria']+'>' + response.data[i]['categoria'] + '</option>';
				for (let j = 0; j < arrPreguntas.length; j++) {
					htmlappend += '<tr>';
					htmlappend += '<td>' + con + '</td>';
					htmlappend += '<td>' + arrPreguntas[j].pregunta + '</td>';
					htmlappend += '<td >' + response.data[i]['categoria'] + '</td>';
					htmlappend += '<td>' + arrPreguntas[j].numAciertos + '</td>';
					htmlappend +=
						"<td><input type='button' href='editarpreguntas.php' value='Editar' id='EditarPreguntas' /></td>";
					htmlappend += "<td><input type='button' value='Eliminar' id='EliminarPreguntas' /></td>";
					htmlappend += '</tr>';
					aux = j + 1;
					con++;
				}
				con = aux + 1;
				//insecion al combo
				$('#categorias').html(htmlcombo);
			}
			//insercion a la tabla
			$('#tablaPreguntas').append(htmlappend);
		},
	});
	//----------------------------------EVENTOS JS----------------------------------
	$(document).on('click', '#EditarPreguntas', function () {
		window.location.href = 'http://localhost/PhotoAlmi/web/editarpreguntas.php';
	});
	$(document).on('change', '#categorias', function () {
		var campoFiltrar = $('#categorias').val().toUpperCase();
		console.log(campoFiltrar)
		/*var resto = 2;
		$('#tablaPreguntas td').each(function (index) {
			console.log(campoFiltrar);
			if (index % 6 == resto) {
				var texto = $(this).text();
				if (texto != campoFiltrar) {
					$(this).parent('tr').hide();
					if ('selected' == campoFiltrar) {
						$(this).parent('tr').show();
					}
				} else {
					$(this).parent('tr').show();
				}
			}
		});*/
		if(campoFiltrar == "SELECTED")
		{
			$("#tablaPreguntas tr").show();
			$(campoFiltrar).val('');
			var comprobarFiltrar = campoFiltrar;
		}
		else
		{
			$("#tablaPreguntas td").parent("tr").hide().filter(function(){
				return $(this).children("td:nth-child(3)").text().toUpperCase().startsWith(campoFiltrar);
			 }).show();
			 comprobarFiltrar = campoFiltrar;
		}
	});
	$("#filtro").on("keyup",function()
	{
		var busqueda = $(this).val().toUpperCase();
		var campoFiltrar = $('#categorias').val().toUpperCase();
		$("#tablaPreguntas tr").filter(function()
		{
			if($(this).toggle($(this).text().toUpperCase().indexOf(busqueda) > -1) && campoFiltrar == comprobarFiltrar.toUpperCase()){
				console.log("hola");
			}
		});
	});
	/*$("#filtro").on("change textInput input", function() {
		var campoFiltrar = $('#categorias').val();
		var textoFiltro = $('#filtro').val().toLowerCase();
		var resto = 2;
		$('#tablaPreguntas td').each(function (index) {
			if (index % 6 == resto) {
				var texto = $(this).text();
				if (texto != campoFiltrar) {
					$(this).parent('tr').hide();
					if ('selected' == campoFiltrar) {
						$(this).parent('tr').show();
						console.log("estoy en todo cristian");
					}
				} else {
					$(this).parent('tr').show();
                    var restos = 1;
					console.log("hola aqui si");
					$(this).filter(function(index) {
						$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
					  });
				}
			}
		});
	});*/

});
