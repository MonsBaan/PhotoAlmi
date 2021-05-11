<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet">
  <title>KalmiHoot</title>
  <div id='titulo'><img src='source/image/Kalmihoot.png'></div>
  <link rel='stylesheet' type='text/css' href='css/comun2.css'>
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
      <a href="index2.php">
        <li>KalmiHoot</li>
      </a>
      <a href="#">
        <li>Prueba 1</li>
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
      if (isset($_SESSION["user"]) == true) {
        echo "<p>Hola PEPE</p>";
      }
      else {
        echo "<a href='index2.php'>";
        echo "<li>Cerrar sesión</li>";
        echo "</a>";
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
          <p>sdhjshd</p>
        </div>
        <div id="camposUsuario">
          <label id="direccionUsuario" for="address">Dirección: </label>
          <input type="text" id="address" name="address" placeholder="Calle del Amodsdasdasdasdasr" />
          <label id="telefonoUsuario" for="phone">Teléfono: </label>
          <input type="text" id="phone" name="phone" placeholder="6969696969" />
          <label id="contraseniaUsuario" for="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="Almi123" />

        </div>
      </div>

      <div id="fotosUsuario">
        <div id="imagenUsuario">
          <img id='perfil' src='source/image/StaleMans.png'>
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
        <p>sdhjshd</p>
      </div>
      <div id="camposUsuario">
        <div id="direccionUsuario">
          <p>Dirección:</p>
          <p>Calle del Amodsdasdasdasdasr</p>
        </div>
        <div id="telefonoUsuario">
          <p>Teléfono:</p>
          <p>69696969</p>
        </div>
        <div id="contraseniaUsuario">
          <p>Contraseña:</p>
          <p>Almi123</p>
        </div>
      </div>
    </div>
    <div id="fotosUsuario">
      <div id="imagenUsuario">
        <img id='perfil' src='source/image/StaleMans.png'>
      </div>
      <div id="editarDatos">
        <input type="button" id="editarDatosUsuario" value="Editar datos" />
      </div>
    </div>
  </div>



  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="js/comun.js"></script>
  <script src="js/editarDatos.js"></script>
</body>

</html>