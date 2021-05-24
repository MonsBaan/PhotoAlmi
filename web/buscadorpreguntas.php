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
        <link rel='stylesheet' type='text/css' href='css/SUpanel.css'>
        <?php
        if ($_SESSION["pos"] == "SuperUser") {
            echo "<link rel='stylesheet' type='text/css' href='css/SUcomun.css'>";
            echo "<link rel='stylesheet' type='text/css' href='css/SUbuscadorPreguntas.css'>";
        } else {
            echo "<link rel='stylesheet' type='text/css' href='css/comun.css'>";
            echo "<link rel='stylesheet' type='text/css' href='css/buscadorPreguntas.css'>";
        }
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
          <li>Profile</li>
        </a>
        <a href="buscadorpreguntas.php">
          <li>All Questions</li>
        </a>
        <a href="#">
          <li>Add Question</li>
        </a>
        <?php
        if ($_SESSION['pos'] == "SuperUser") {
          echo "<a href='crearCategoria.php' id='liSuperUser'>";
          echo "<li>Create Category</li>";
          echo "</a>";

          echo "<a href='panelSuperUser.php' id='liSuperUser'>";
          echo "<li>SuperUser Manager</li>";
          echo "</a>";
        }
        ?>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <?php
        if (isset($_SESSION["name"]) == true) {
          echo "<li id = 'liName'>" . "Hi, " . $_SESSION["name"] . "." . "</li>";
          echo "<a href='php/cerrarUser.php'>";
          echo "<li>Close Session</li>";
          echo "</a>";
        } else {
          echo "No Session";
        }
        ?>
        <li></li>

        <li></li>
        <li></li>
      </ul>
    </div>
        <div id="cuerpo">
            <div id="elementosFiltro">
                <label id="introFiltro" for="filtro">Enter Search: </label>
                <input type="text" id="filtro" name="filtro" />
                <select id="categorias"></select>
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