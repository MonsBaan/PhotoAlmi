<!DOCTYPE html>
<html lang="es">
<?php
session_start();

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
    <link rel='stylesheet' type='text/css' href='css/modal.css'>
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

        <!-- mensaje de error-->
<div id="myModal" class="modal">
            <div class="modal-content">

                <p>kk</p>
                <button id="aceptar" class="send">Aceptar</button>
                <button id="cancelar" class="send">Cancelar</button>
            </div>
        </div>

    <div class="panelOculto" id="panelCentral">
      <h1>CREATE CATEGORY</h1>
      <div>
      </div>
      <form id="formularioCrearUsuario" action="buscadorpreguntas.php" method="post">
        <input type="text" name="categoria" id='categoria' placeholder="Insert Category *" /> <br>
        <div id='error'>The required value is blank or invalid</div>
        <input type="button" name='Add' value='Add' id='Add' />
      </form>
      <script src="js/jquery-3.6.0.min.js"></script>
      <script src="js/comun.js"></script>
      <script src="js/crearCategoria.js"></script>
  </body>
<?php
}
?>

</html>