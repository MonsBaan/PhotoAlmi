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
        <h1>EDITA LAS PREGUNTAS</h1>
<div>

<form action="upload.php" method="post" enctype="multipart/form-data">
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Subir Imagen" name="submit">
</form>

<br> 

        </div>
        <form id="formularioEditarPregunta" action="php/modificarPregunta.php" method="post">

        <label id="campoPregunta" for="question">Pregunta: </label>
        <input type="text" id="question" name="question" placeholder="¿Quién no se echaría un KALMIHOOT?" />
       <br>
     
        <label id="campoCategoria" for="category">Categoría: </label>
        <select id="campoCategoria">
          <option value="FOL">FOL</option>
          <option value="categoria2">categoria2</option>
          <option value="categoria3">categoria3</option>
          <option value="categoria4">categoria4</option>
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
        if (isset($_SESSION["id"]) == false) {
          echo "<input type='button' id='botonPregunta' value='Añadir pregunta' />";
          echo "<input type='button' id='botonPregunta' value='Actualizar pregunta' />";
        } else {
          echo "<input type='file' name='fileToUpload' id='fileToUpload'>";
          echo "<input type='submit' value='Upload Image' name='submit'>";
          //echo "<input type='button' id='botonPregunta' value='Actualizar pregunta' />";
        }
        ?>


      </div>
    </form>



    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/comun.js"></script>
    <script src="js/editarPreguntas.js"></script>

  </body>
<?php
//}
?>

</html>
