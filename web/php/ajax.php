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
    echo $_POST['direccion'];
    $user = updateUser($_POST['id'], $_POST['direccion'], $_POST['telefono'], $_POST['contrasena']);

    break;
  case 'PreguntasAjax':
    break;
    
  case 'CrearPreguntas':
    break;

  default:
    echo "Funcion: " . $function . " no existente";
    break;
}
