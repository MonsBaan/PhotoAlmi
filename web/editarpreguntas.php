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
  <link rel='stylesheet' type='text/css' href='css/comun.css'>

  <link rel='stylesheet' type='text/css' href='css/editarPreguntas.css'>

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
      } else {
        echo "<a href='index2.php'>";
        echo "<li>Cerrar sesión</li>";
        echo "</a>";
      }
      ?>

      <li></li>
    </ul>
  </div>

  <form id="formularioEditarPregunta" action="modificarPregunta.php" method="post">

    <div class="panelOculto" id="panelCentral">
      <h1>EDITA LAS PREGUNTAS</h1>

      <label id="campoIMG" for="img">IMG: </label>
      <input type="file" id="img" name="img" placeholder="SELECT FILE" />
      <label id="campoPregunta" for="question">Pregunta: </label>
      <input type="text" id="question" name="question" placeholder="¿Quién no se echaría un KALMIHOOT?" />
      <label id="campoCategoria" for="category">Categoría: </label>
      <select id="campoCategoria">
        <option value="FOL">FOL</option>
        <option value="categoria2">categoria2</option>
        <option value="categoria3">categoria3</option>
        <option value="categoria4">categoria4</option>
      </select>

      <div id="respuesta">
        <!--<label id="checkbox1" for="check1">Respuesta correcta: </label>-->
        <input type="checkbox" id="check1" name="check1" />
        <label id="campoRespuesta1" for="ans1">Respuesta 1: </label>
        <input type="text" id="ans1" name="ans1" placeholder="YO + CHECKBOX" />
      </div>


      <div id="respuesta">
        <!--<label id="checkbox2" for="check2">Respuesta correcta: </label>-->
        <input type="checkbox" id="check2" name="check2" />
        <label id="campoRespuesta2" for="ans2">Respuesta 2: </label>
        <input type="text" id="ans2" name="ans2" placeholder="YO" />
      </div>

      <div id="respuesta">
       <!--<label id="checkbox3" for="check3">Respuesta correcta: </label>-->
        <input type="checkbox" id="check3" name="check3" />
        <label id="campoRespuesta3" for="ans3">Respuesta 3: </label>
        <input type="text" id="ans3" name="ans3" placeholder="YO" />
      </div>

      <div id="respuesta">
        <!--<label id="checkbox4" for="check4">Respuesta correcta: </label>-->
        <input type="checkbox" id="check4" name="check4" />
        <label id="campoRespuesta4" for="ans4">Respuesta 4: </label>
        <input type="text" id="ans4" name="ans4" placeholder="YO" />
      </div>
      <label id="campoExplicacion" for="expl">Explicación: </label>
      <input type="text" id="expl" name="expl" placeholder="¿Quién sino?" />

      <input type="button" id="botonPregunta" value="Enviar pregunta" />
    </div>
  </form>



  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="js/comun.js"></script>

</body>

</html>