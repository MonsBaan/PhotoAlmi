<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet">
    <title>KalmiHoot</title>
    <link rel="icon" href="source/image/StaleMans.png" type="image/icon type">
    <div id='titulo'><img src='source/image/Kalmihoot.png'></div>
    <link rel='stylesheet' type='text/css' href='css/comun.css'>
    <link rel='stylesheet' type='text/css' href='css/panelUsuario.css'>
    <link rel='stylesheet' type='text/css' href='css/buscadorPreguntas.css'>

    <?php
    session_start();
    include("php/datos.php");
    ?>
</head>

<body>
    <div id="menuHamburguesa">

        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
            <a href="index.php">
                <li>KalmiHoot</li>
            </a>
            <a href="buscadorpreguntas.php">
                <li>Preguntas</li>
            </a>
            <a href="#">
                <li>Prueba 2</li>
            </a>
            <a href="#">
                <li>Prueba 3</li>
            </a>
            <a href="#">
                <li>Prueba 4</li>
            </a>
            <a href="#">
                <li>Prueba 5</li>
            </a>
            <?php
            if (isset($_SESSION["id"]) == true) {
                echo "<p>Hola PEPE</p>";
            } else {
                echo "<a href='index2.php'>";
                echo "<li>Cerrar sesión</li>";
                echo "</a>";
            }
            ?>

            <li></li>
        </ul>
    </div>



    <div id="cuerpo">

        <div id="elementosFiltro">
            <label id="introFiltro" for="filtro">Introducir búsqueda</label>
            <input type="text" id="filtro" name="filtro" />
            <select id="categorias">
                <option value="FOL">FOL</option>
                <option value="categoria2">categoria2</option>
                <option value="categoria3">categoria3</option>
                <option value="categoria4">categoria4</option>
            </select>
        </div>
        <br></br>
        <table id="tablaPreguntas">
            <tr>
                <th>ID</th>
                <th>PREGUNTA</th>
                <th>CATEGORIA</th>
                <th>FALLOS</th>
                <th>ACIERTOS</th>

                <th>EDITAR</th>
                <th>ELIMINAR</th>
            </tr>

            <tr>
                <td>000000002</td>
                <td>¿Quién no jugaría un buen KALMIHOOT?</td>
                <td>FOL</td>
                <td>0</td>
                <td>95</td>

                <td><input type='button' value='Editar' id='EditarPreguntas' /></td>
                <td><input type='button' value='Eliminar' id='EliminarPreguntas' /></td>
            </tr>
            <tr>
                <td>000000002</td>
                <td>¿Quién no jugaría un buen KALMIHOOT?</td>
                <td>FOL</td>
                <td>0</td>
                <td>95</td>

                <td><input type='button' value='Editar' id='EditarPreguntas' /></td>
                <td><input type='button' value='Eliminar' id='EliminarPreguntas' /></td>
            </tr>
            <tr>
                <td>000000002</td>
                <td>¿Quién no jugaría un buen KALMIHOOT?</td>
                <td>FOL</td>
                <td>0</td>
                <td>95</td>

                <td><input type='button' value='Editar' id='EditarPreguntas' /></td>
                <td><input type='button' value='Eliminar' id='EliminarPreguntas' /> </td>
            </tr>

            <tr>
                <td>000000002</td>
                <td>¿Quién no jugaría un uen KALMIHOOT?</td>
                <td>FOL</td>
                <td>0</td>
                <td>95</td>

                <td><input type='button' value='Editar' id='EditarPreguntas' /></td>
                <td><input type='button' value='Eliminar' id='EliminarPreguntas' /></td>
            </tr>

            <?php
            include "datos.php";

            //  $categorias = getCategorias();

            /*   $numCategorias = sizeof($categorias);
            for ($i = 0; $i < $numCategorias; $i++) {
                $juegos = juegosCategoria($categorias[$i]["id_categoria"]);
                $numJuegos = sizeof($juegos);
                for ($j = 0; $j < $numJuegos; $j++) {
                    echo "<tr>";
                    echo "<td>" . $juegos[$j]["titulo"] . "</td>";
                    echo "<td>" . $juegos[$j]["precio"] . "</td>";
                    echo "<td>" . $categorias[$i]["nombre"] . "</td>";
                    echo "</tr>";
                }
            }
            */
            ?>
        </table>
    </div>




    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/comun.js"></script>
    <script src="js/buscadorPreguntas.js"></script>
</body>

</html>