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
  case 'loginAjax':
    $user = loginAjax($_POST['nombre'], $_POST['contrasena']);
    $userJson = json_encode($user, JSON_UNESCAPED_UNICODE);
    echo $userJson;
    break;

  case 'updateUser':
    echo $_POST['nombre'];
    $user = updateUser($_POST['nombre'], $_POST['direccion'], $_POST['telefono'], $_POST['contrasena']);
    if ($user == 1) {
      
      if ($_POST["dirreccion"] = "") {
        $_POST['direccion'] = $_SESSION["dir"];
      } else {
        $_SESSION["dir"] = $_POST['direccion'];
      }

      if ($_POST["telefono"] = "") {
        $_POST['telefono'] = $_SESSION["tlf"];
      } else {
        $_SESSION["tlf"] = $_POST['telefono'];
      }

      if ($_POST["contrasena"] = "") {
        $_POST['contrasena'] = $_SESSION["pass"];
      } else {
        $_SESSION["pass"] = $_POST['contrasena'];
      }
    }
    break;

  default:
    echo "Funcion: " . $function . " no existente";
    break;
}
