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


<?php
    if ($_SESSION["pos"] == "SuperUser") {
      echo "<link rel='stylesheet' type='text/css' href='css/SUcomun.css'>";
      echo "<link rel='stylesheet' type='text/css' href='css/SUeditarPreguntas.css'>";
    } else {
      echo "<link rel='stylesheet' type='text/css' href='css/comun.css'>";
      echo "<link rel='stylesheet' type='text/css' href='css/editarPreguntas.css'>";
    }
    ?>
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
        <button id="aceptar" class="send">Accept</button>
        <button id="cancelar" class="send">Cancel</button>
      </div>
    </div>

    <div class="panelOculto" id="panelCentral">
      <h1>CREATE QUESTION</h1>
      <div>

        <form class="formSubir" action="crearpreguntas.php" method="post" enctype="multipart/form-data">
          <input type="file" name="fileToUpload" id="fileToUpload">
        </form>
        <img id="imagen" src="source/image/StaleMans.png" alt="">

        <br>

      </div>
      <form id="formularioCrearPregunta" action="crearpreguntas.php" method="put">

        <label id="campoPregunta" for="question">Question: </label>
        <input type="text" id="question" name="question" placeholder="" />
        <br>

        <label id="campoCategoria" for="category">Category: </label>
        <select id="comboCategoria">

        </select>
        <br>

        <div id="respuesta">
          <input type="checkbox" id="check1" name="check1" />
          <label id="campoRespuesta1" for="ans1">Answer 1: </label>
          <input type="text" id="ans1" name="ans1" placeholder="" />
        </div>


        <div id="respuesta">
          <input type="checkbox" id="check2" name="check2" />
          <label id="campoRespuesta2" for="ans2">Answer 2: </label>
          <input type="text" id="ans2" name="ans2" placeholder="" />
        </div>

        <div id="respuesta">
          <input type="checkbox" id="check3" name="check3" />
          <label id="campoRespuesta3" for="ans3">Answer 3: </label>
          <input type="text" id="ans3" name="ans3" placeholder="" />
        </div>

        <div id="respuesta">
          <input type="checkbox" id="check4" name="check4" />
          <label id="campoRespuesta4" for="ans4">Answer 4: </label>
          <input type="text" id="ans4" name="ans4" placeholder="" />
        </div>
        <label id="campoExplicacion" for="expl">Explanation: </label>
        <input type="text" id="expl" name="expl" placeholder="" />

        <input type='button' id='botonPregunta' value='Add Question' />




    </div>
    </form>




    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="js/comun.js"></script>
    <script src="js/crearPreguntas.js"></script>

  </body>
<?php
}
?>

</html>