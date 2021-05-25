<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Max-Age: 86400");
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  exit(0);
}

header('Content-Type: application/JSON');

$function = $_POST['function'];
include './datos.php';
session_start();



switch ($function) {
  case 'login':
    $_SESSION["id"] = $_POST['id'];
    $_SESSION["name"] = $_POST['nombre'];
    $_SESSION["sur1"] = $_POST['apellido1'];
    $_SESSION["sur2"] = $_POST['apellido2'];
    $_SESSION["dni"] = $_POST['dni'];
    $_SESSION["dir"] = $_POST['direccion'];
    $_SESSION["tlf"] = $_POST['telefono'];
    $_SESSION["pass"] = $_POST['contrasena'];
    $_SESSION["img"] = $_POST['imagen'];
    $_SESSION["idPos"] = $_POST['idPuesto'];
    $_SESSION["pos"] = $_POST['puesto'];
    break;

  case 'update':
    $_SESSION["dir"] = $_POST['direccion'];
    $_SESSION["tlf"] = $_POST['telefono'];
    $_SESSION["pass"] = $_POST['contrasena'];
    echo "hola";
    break;

    case 'guardarID':
      $_SESSION["id_pregunta"] = $_POST['id_'];
      echo "hola";
      break;

  default:
    echo "Funcion: " . $function . " no existente";
    break;
}
