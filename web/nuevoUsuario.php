<!DOCTYPE html>
<html lang="es">

<?php
//session_start();
include("php/datos.php");

/*if (isset($_SESSION["pos"]) == false) {
  header("location: login.php");
} else {*/
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
    <link rel='stylesheet' type='text/css' href='css/editarPreguntas.css'>
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
        <label>Name: </label>
        <input type="text" name="usuario" id='usuario' placeholder="Insert name" /> <br>
        <label>Surname 1: </label>
        <input type="text" name="Apellido1" id='Apellido1' placeholder="Insert first surname" /> <br>
        <label>Surname 2: </label>
        <input type="text" name="Apellido2" id='Apellido2' placeholder="Insert second surname" /> <br>
        <label>ID: </label>
        <input type="text" name="id" id='userid' placeholder="Insert ID" /> <br>
        <label>Post: </label>
        <input type="text" name="puesto" id='puesto' placeholder="Insert post" /> <br>
        <input type="button" name='Add' value='Add' />
      </form>

      <script src="js/jquery-3.6.0.min.js"></script>
      <script src="js/comun.js"></script>
      <script src="js/nuevoUsuario.js"></script>

  </body>
<?php
//}
?>

</html>