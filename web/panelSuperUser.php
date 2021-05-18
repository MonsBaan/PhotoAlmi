<!DOCTYPE html>
<html lang="es">

<?php
session_start();
include("datos.php");

if (isset($_SESSION["pos"]) == false || $_SESSION["pos"] != "SuperUser") {
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

    <div id='titulo'>

      <img src='source/image/Kalmihoot.png'>
    </div>
    <link rel='stylesheet' type='text/css' href='css/comun.css'>
    <link rel='stylesheet' type='text/css' href='css/panelSuperUser.css'>

  </head>

  <body>
    <div id="menuHamburguesa">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <a href="index.php">
          <li>Perfil</li>
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
        if ($_SESSION["pos"] == "SuperUser") {
          echo "<a href='panelSuperUser.php' id='liUser'>";
          echo "<li>Panel Administrador</li>";
          echo "</a>";
        }
        ?>


        <?php
        if (isset($_SESSION["name"]) == true) {
          echo "<li>" . $_SESSION["name"] . "</li>";
          echo "<a href='php/cerrarUser.php'>";
          echo "<li>Cerrar Session</li>";
          echo "</a>";
        } else {
          echo "No hay sesion";
        }
        ?>

        <li></li>
      </ul>
    </div>

    <div id='cuerpo'> </div>
    <table id="panelCompleto">
      <tr>
        <th>Nombre</th>
        <th>Apellido 1</th>
        <th>Apellido 2</th>
        <th>DNI</th>
        <th>Direccion</th>
        <th>Telefono</th>
        <th>Contraseña</th>
        <th>Imagen</th>
        <th>Puesto</th>
      </tr>
      <?php
      for ($i = 0; $i < 3; $i++) {
        echo "<tr>";
        echo "<td>Prueba Nombre</td>";
        echo "<td>Prueba Ap1</td>";
        echo "<td>Prueba Ap2</td>";
        echo "<td>Prueba DNI</td>";
        echo "<td>Prueba Dir</td>";
        echo "<td>Prueba Tlf</td>";
        echo "<td>Prueba Pass</td>";
        echo "<td>Prueba Img</td>";
        echo "<td>Prueba Puesto</td>";
        echo "</tr>";
      }


      ?>


    </table>

    <div id='cargarMas'>
      <a href="#">Cargar Mas</a>

    </div>
    </div>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/panelSuperUser.js"></script>
    <script src="js/comun.js"></script>

  </body>
<?php
}
?>

</html>