<!DOCTYPE html>
<html lang="es">

<?php
//session_start();
include("php/datos.php");

//if (isset($_SESSION["pos"]) == false) {
//header("location: login.php");
//} else {
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


  <div class="panelOculto" id="panelCentral">
    <h1>CREA PREGUNTAS</h1>
    <div>

      <form class = "formSubir" action="crearpreguntas.php" method="post" enctype="multipart/form-data">
        <input type="file" name="fileToUpload" id="fileToUpload">
      </form>

      <br>

    </div>
    <form id="formularioCrearPregunta" action="crearpreguntas.php" method="put">

      <label id="campoPregunta" for="question">Pregunta: </label>
      <input type="text" id="question" name="question" placeholder="¿Quién no se echaría un KALMIHOOT?" />
      <br>

      <label id="campoCategoria" for="category">Categoría: </label>
      <select id="comboCategoria">

      </select>
      <br>

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



      <?php
        echo "<input type='button' id='botonPregunta' value='Añadir pregunta' />";
 
      ?>


  </div>
  </form>




  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="js/comun.js"></script>
  <script src="js/crearPreguntas.js"></script>

</body>
<?php
//}
?>

</html>