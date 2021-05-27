$(document).ready(function() {
    console.log('Documento Listo');
    var urlDB = 'http://192.168.6.195:8080/kalmihootApi/';
    var urlHtml = 'http://192.168.6.151/PhotoAlmi/web/';

    //----------------------------------AJAX----------------------------------
    //OBTENER TODAS LAS PREGUNTAS DE MONGODB
    actualizarTabla();
    //----------------------------------EVENTOS JS----------------------------------
    $(document).on('click', '#EditarPreguntas', function() {
        window.location.href = $(this).attr('href');
    });
    $(document).on('click', '#EliminarPreguntas', function(event) {
        event.preventDefault();
        id = $(this).attr('href');
        cat = $(this).parent().attr('id');
        $('#myModal').css('display', 'block');
        $('.modal-content > p').text('¿Are you sure that you want to remove this?');
        //aceptar
        $('#aceptar').click(function() {
            $.ajax({
                url: urlDB + "pregunta/" + cat + "/" + id,
                type: "put",
                success: function(response) {
                    actualizarTabla();
                }
            })
            $('#myModal').css('display', 'none');
        });
        //cancelar
        $('#cancelar').click(function() {
            event.preventDefault()
            $('#myModal').css('display', 'none');
        });
    });

    $(document).on('change', '#categorias', function() {
        var campoFiltrar = $('#categorias').val().toUpperCase();
        console.log(campoFiltrar);
        if (campoFiltrar == 'SELECTED') {
            $('#tablaPreguntas tr').show();
            $(campoFiltrar).val('');
            var comprobarFiltrar = campoFiltrar;
        } else {
            $('#tablaPreguntas td')
                .parent('tr')
                .hide()
                .filter(function() {
                    return $(this).children('td:nth-child(3)').text().toUpperCase().startsWith(campoFiltrar);
                })
                .show();
            comprobarFiltrar = campoFiltrar;
        }

    });
    $('#filtro').on('keyup', function() {
        var busqueda = $(this).val().toUpperCase();
        $('#tablaPreguntas td').filter(function() {
            let $tabla = $(this).parent('tr');
            $tabla.toggle($tabla.text().toUpperCase().indexOf(busqueda) > -1);
        });
    });

    function actualizarTabla() {
        $('#tablaPreguntas').html("");

        $.ajax({
            url: urlDB + "preguntas",
            type: 'get',
            success: function(response) {
                let htmlappend = '<tr>';
                htmlappend += '<th>NUMBER</th>';
                htmlappend += '<th>QUESTION</th>';
                htmlappend += '<th>CATEGORY</th>';
                htmlappend += '<th>SUCCESS</th>';
                htmlappend += '</tr>';
                let arrTodo = response.data;
                //combo
                let htmlcombo = "<option value='selected'>Everything...</option>";
                let con = 1;
                let aux;
                for (let i = 0; i < arrTodo.length; i++) {
                    //arr preguntas
                    let arrPreguntas = response.data[i]['preguntas'];
                    htmlcombo +=
                        '<option value=' +
                        response.data[i]['categoria'] +
                        '>' +
                        response.data[i]['categoria'] +
                        '</option>';
                    for (let j = 0; j < arrPreguntas.length; j++) {
                        htmlappend += '<tr>';
                        htmlappend += '<td value = "' + arrPreguntas[j]._id + '" >' + con + '</td>';
                        htmlappend += '<td>' + arrPreguntas[j].pregunta + '</td>';
                        htmlappend += '<td >' + response.data[i]['categoria'] + '</td>';
                        htmlappend += '<td>' + arrPreguntas[j].numAciertos + '</td>';
                        htmlappend +=
                            "<td><img id='EditarPreguntas' src='source/image/editarN.png' alt='Imagen Recargar' href='editarpreguntas.php?id=" + arrPreguntas[j]._id + "' class='imagenPanel'></img></td>";
                        htmlappend +=
                            "<td id=" + response.data[i]._id + "><img id='EliminarPreguntas' src='source/image/papeleraN.png' alt='Imagen Recargar' href='" + arrPreguntas[j]._id + "' class='imagenPanel'></td>";
                        htmlappend += '</tr>';
                        aux = j + 1;
                        con++;
                    }
                    con = aux + 1;
                    //insecion al combo
                    $('#categorias').html(htmlcombo);
                }
                //insercion a la tabla.
                $('#tablaPreguntas').append(htmlappend);
            },
        });
    }

});