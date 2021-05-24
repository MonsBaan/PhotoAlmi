<!DOCTYPE html>
<html lang="es">
<?php
session_start();
include("php/datos.php");
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
    <link rel='stylesheet' type='text/css' href='css/SUcomun.css'>
    <link rel='stylesheet' type='text/css' href='css/SuCrearUsuario.css'>
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
    <div class="panelOculto" id="panelCentral">
      <h1>CREATE WORKERS</h1>
      <div>
      </div>
      <form id="formularioCrearUsuario" action="php/" method="post">
        <input type="text" name="usuario" id='usuario' placeholder="Insert name *" /> <br>
        <input type="text" name="Apellido1" id='Apellido1' placeholder="Insert first surname" /> <br>
        <input type="text" name="Apellido2" id='Apellido2' placeholder="Insert second surname" /> <br>
        <input type="text" name="id" id='userid' placeholder="Insert ID *" /> <br>
        <input type="text" name="direccion" id='direccion' placeholder="Insert direction" /> <br>
        <input type="text" name="telefono" id='telefono' placeholder="Insert telephone *" /> <br>
        <div id='error2'>The required values are blank or invalid</div>
        <div id='error'>The defined charge is not valid</div>
        <div id="panelPuesto">
          <label>Charge: </label>
          <select name="puesto" id="puesto"></select>
        </div>
        <input type="button" name='Add' value='Add' id='Add' />
      </form>
      <script src="js/jquery-3.6.0.min.js"></script>
      <script src="js/comun.js"></script>
      <script src="js/nuevoUsuario.js"></script>
  </body>
<?php
}
?>

</html>