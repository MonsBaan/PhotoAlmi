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

    <div id='titulo'>

      <img src='source/image/Kalmihoot.png'>
    </div>

    <?php
    if ($_SESSION["pos"] == "SuperUser") {
      echo "<link rel='stylesheet' type='text/css' href='css/comunSuperUser.css'>";
      echo "<link rel='stylesheet' type='text/css' href='css/superUser.css'>";
    } else {
      echo "<link rel='stylesheet' type='text/css' href='css/comun.css'>";
      echo "<link rel='stylesheet' type='text/css' href='css/panelUsuario.css'>";
    }
    ?>
    <link rel='stylesheet' type='text/css' href='css/editarDatos.css'>

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
          echo "<a href='#' id='liSuperUser'>";
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

    <!-- MUESTRA LOS DATOS DEL USUARIO QUE SE PUEDEN MODIFICAR, LLAMÁNDOLO A LA BBDD -->
    <form id="formulario" action="modificarUsuario.php" method="post">
      <span class="close">&times;</span>
      <div class="panelOculto" id="panelCentral">
        <div id="datosUsuario">
          <div id="nombreUsuario">
            <p><?php echo $_SESSION['name'] . " " . $_SESSION['sur1'] . " " . $_SESSION['sur2']; ?></p>
          </div>
          <div id="camposUsuario">
            <div id="direccionUsuario">
              <p>Address:</p>
              <input type='text' id='address' name='address' placeholder='<?php echo $_SESSION['dir']; ?>' />
            </div>
            <div id="telefonoUsuario">
              <p>Phone Number:</p>
              <input type='text' id='phone' name='phone' placeholder='<?php echo $_SESSION['tlf']; ?>' />
            </div>
            <div id="contrasenaUsuario">
              <p>Nueva contraseña:</p>
              <input type='password' id='password' name='password' placeholder='Type your new password' />
            </div>
            <div id="reContrasenaUsuario">
              <p>Repita su contraseña:</p>
              <input type='password' id='repassword' name='password' placeholder='Type the password again' />
            </div>
          </div>
        </div>

        <div id="fotosUsuario">
          <div id="imagenUsuario">
            <img id='perfil' src=<?php echo $_SESSION['img']; ?>>
          </div>

          <div id="editarDatos">
            <input type="button" id="confirmarDatosUsuario" value="Confirm Changes" />
          </div>
        </div>
      </div>
    </form>


    <!-- MUESTRA LOS DATOS DEL USUARIO SIN PODER MODIFICAR, LLAMÁNDOLO A LA BBDD -->
    <div class="panelModificar" id="panelCentral">
      <div id="datosUsuario">
        <div id="nombreUsuario">
          <p><?php echo $_SESSION['name'] . " " . $_SESSION['sur1'] . " " . $_SESSION['sur2']; ?></p>
        </div>
        <div id="camposUsuario">
          <div id="dniUsuario">
            <p>Personal Id: </p>
            <p id="dniMostrar"><?php echo $_SESSION['dni'] ?></p>
          </div>
          <div id="direccionUsuario">
            <p>Address: </p>
            <p id="addressMostrar"><?php echo $_SESSION['dir']; ?></p>
          </div>
          <div id="telefonoUsuario">
            <p>Phone Number:</p>
            <p id="phoneMostrar"><?php echo $_SESSION['tlf']; ?></p>
          </div>
          <div id="puestoUsuario">
            <p>Charge: </p>
            <p id="posMostrar"><?php echo $_SESSION['pos'] ?></p>
          </div>
        </div>
      </div>
      <div id="fotosUsuario">
        <div id="imagenUsuario">
          <img id='perfil' src=<?php echo $_SESSION['img']; ?>>
        </div>
        <div id="editarDatos">
          <input type="button" id="editarDatosUsuario" value="Change Data" />
        </div>
      </div>
    </div>


    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/editarDatos.js"></script>
    <script src="js/comun.js"></script>

  </body>
<?php
}
?>

</html>