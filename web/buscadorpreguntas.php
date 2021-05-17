<!DOCTYPE html>
<html lang="es">
<?php
session_start();
include("datos.php");

if (isset($_SESSION["pos"]) == false) {
  header("location: login.php");
} else {
?>
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

</head>
<!--hola-->
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
         
        </table>
    </div>




    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/comun.js"></script>
    <script src="js/buscadorPreguntas.js"></script>
</body>
<?php
}
?>
</html>