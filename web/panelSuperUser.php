<!DOCTYPE html>
<html lang="es">

<?php
session_start();


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
    <link rel='stylesheet' type='text/css' href='css/SUcomun.css'>
    <link rel='stylesheet' type='text/css' href='css/SUpanel.css'>
    <link rel='stylesheet' type='text/css' href='css/SUpanelUsuario.css'>
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
        <a href="crearpreguntas.php">
          <li>Add Question</li>
        </a>
        <?php
        if ($_SESSION['pos'] == "SuperUser") {
          echo "<a href='crearCategoria.php' id='liSuperUser'>";
          echo "<li>Create Category</li>";
          echo "</a>";

          echo "<a href='borrarCategoria.php' id='liSuperUser'>";
          echo "<li>Delete Category</li>";
          echo "</a>";

          echo "<a href='panelSuperUser.php' id='liSuperUser'>";
          echo "<li>SuperUser Manager</li>";
          echo "</a>";
        }
        ?>
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

        <p>¿Seguro que quieres eliminar a este usuario?</p>
        <button id="aceptar" class="send">Aceptar</button>
        <button id="cancelar" class="send">Cancelar</button>
      </div>
    </div>

    <div id='cuerpo'>

      <form id="formulario" action="modificarUsuario.php" method="post">
        <span class="close">&times;</span>
        <div class="panelOculto" id="panelCentral">
          <div id="datosUsuario">
            <div id="camposUsuario">
              <div id="nombreUsuario">
                <p>Name:</p>
                <input type='text' id='name' name='name' placeholder='' class='input' />
              </div>
              <div id="apellido1Usuario">
                <p>Surname 1:</p>
                <input type='text' id='surname1' name='surname1' placeholder='' class='input' />
              </div>
              <div id="apellido2Usuario">
                <p>Surname 2:</p>
                <input type='text' id='surname2' name='surname2' placeholder='' class='input' />
              </div>
              <div id="dniUsuario">
                <p>Personal ID:</p>
                <input type='text' id='userId' name='userId' placeholder='' class='input' />
              </div>
              <div id="direccionUsuario">
                <p>Address:</p>
                <input type='text' id='address' name='address' placeholder='' class='input' />
              </div>
              <div id="telefonoUsuario">
                <p>Phone Number:</p>
                <input type='text' id='phone' name='phone' placeholder='' class='input' />
              </div>
              <div id="contrasenaUsuario">
                <p>New Password:</p>
                <input type='password' id='password' name='password' placeholder='Type your new password' class='input' />
              </div>
              <div id="reContrasenaUsuario">
                <p>Repeat the Password:</p>
                <input type='password' id='repassword' name='password' placeholder='Type the password again' class='input' />
              </div>
              <div id="puestoUsuario">
                <p>Charge:</p>
                <select name="puesto" id="puesto" class='input'>
                </select>
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
      <div id='accionesGeneral'>
        <div id='recargarResultados' class='opcionPanel'>
          <label for="recargar">Reload Users</label>
          <img id='theimage' src="source/image/recargar.png" alt="Imagen Recargar" class="imagen">
        </div>
        <div id='añadirUsuario' class='opcionPanel'>
          <label for="añadir">New User</label>
          <a href="nuevoUsuario.php"><img src="source/image/añadir.png" alt="Imagen Añadir" class="imagen"></a>

        </div>
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