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
      <a href="index2.php">
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
        echo "<a href='index.php'>";
        echo "<li>Cerrar sesión</li>";
        echo "</a>";
      }
      ?>
      <li></li>
    </ul>
  </div>
  <div class="panelOculto" id="panelCentral">
    <h1>CREATE WORKERS</h1>
    <div>
    </div>
    <form id="formularioCrearUsuario" action="php/" method="post">
      <input type="text" name="usuario" id='usuario' placeholder="Insert name" /> <br>
      <input type="text" name="Apellido1" id='Apellido1' placeholder="Insert first surname" /> <br>
      <input type="text" name="Apellido2" id='Apellido2' placeholder="Insert second surname" /> <br>
      <input type="text" name="id" id='userid' placeholder="Insert ID" /> <br>
      <input type="text" name="direccion" id='direccion' placeholder="Insert direction" /> <br>
      <input type="text" name="telefono" id='telefono' placeholder="Insert telephone" /> <br>
      <div id="panelPuesto">
        <label>Charge: </label>
        <select name="puesto" id="puesto"></select>
      </div>
      <input type="button" name='Add' value='Add' id='Add'/>
    </form>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/comun.js"></script>
    <script src="js/nuevoUsuario.js"></script>
</body>
<?php
}
?>

</html>