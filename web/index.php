<!DOCTYPE html>
<html lang="es">

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
  <link rel='stylesheet' type='text/css' href='css/panelUsuario.css'>
  <link rel='stylesheet' type='text/css' href='css/editarDatos.css'>

  <?php
  session_start();
  include("datos.php");
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
      if (isset($_SESSION["name"]) == true) {
        echo "<a href='php/cerrarUser.php'>";
        echo "<li>Cerrar Session</li>";
        echo "</a>";
        var_dump($_SESSION);
      } else {
        echo "No hay sesion";
      }
      ?>

      <li></li>
    </ul>
  </div>

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

  <div class="panelModificar" id="panelCentral">
    <div id="datosUsuario">
      <div id="nombreUsuario">
        <p><?php echo $_SESSION['name'] . " " . $_SESSION['sur1'] . " " . $_SESSION['sur2']; ?></p>
      </div>
      <div id="camposUsuario">
        <div id="direccionUsuario">
          <p>Dirección:</p>
          <p><?php echo $_SESSION['dir']; ?></p>
        </div>
        <div id="telefonoUsuario">
          <p>Teléfono:</p>
          <p><?php echo $_SESSION['tlf']; ?></p>
        </div>
      </div>
    </div>
    <div id="fotosUsuario">
      <div id="imagenUsuario">
        <img id='perfil' src=<?php echo $_SESSION['img']; ?>>
      </div>
        <div id="editarDatos">
          <input type="button" id="editarDatosUsuario" value="Editar datos" />
        </div>
    </div>
  </div>

  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="js/editarDatos.js"></script>
  <script src="js/comun.js"></script>

</body>

</html>