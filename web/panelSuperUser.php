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
    <link rel='stylesheet' type='text/css' href='css/comunSuperUser.css'>
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

    <div id='cuerpo'>

    <form id="formulario" action="modificarUsuario.php" method="post">
      <span class="close">&times;</span>
      <div class="panelOculto" id="panelCentral">
        <div id="datosUsuario">
          <div id="nombreUsuario">
            <p><?php echo $_SESSION['name'] . " " . $_SESSION['sur1'] . " " . $_SESSION['sur2']; ?></p>
          </div>
          <div id="camposUsuario">
            <div id="direccionUsuario">
              <p>Dirección:</p>
              <input type='text' id='address' name='address' placeholder='<?php echo $_SESSION['dir']; ?>' />
            </div>
            <div id="telefonoUsuario">
              <p>Teléfono:</p>
              <input type='text' id='phone' name='phone' placeholder='<?php echo $_SESSION['tlf']; ?>' />
            </div>
            <div id="contrasenaUsuario">
              <p>Nueva contraseña:</p>
              <input type='password' id='password' name='password' placeholder='Escriba su nueva contraseña' />
            </div>
            <div id="reContrasenaUsuario">
              <p>Repita su contraseña:</p>
              <input type='password' id='repassword' name='password' placeholder='Repita nueva contraseña' />
            </div>
          </div>
        </div>

        <div id="fotosUsuario">
          <div id="imagenUsuario">
            <img id='perfil' src=<?php echo $_SESSION['img']; ?>>
          </div>

          <div id="editarDatos">
            <input type="button" id="confirmarDatosUsuario" value="Confirmar los cambios" />
          </div>
        </div>
      </div>
    </form>
      





      <div id='recargarResultados' class='opcionPanel'>
        <label for="recargar">Reload Users</label>
        <img src="source/image/recargar.png" alt="Imagen Recargar" class="imagen">
      </div>
      <div id='añadirUsuario' class='opcionPanel'>
        <label for="añadir">New User</label>
        <img src="source/image/añadir.png" alt="Imagen Añadir" class="imagen">
      </div>

      <table id="tablaUsers">


      </table>
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