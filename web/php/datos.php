<?php
function conectarBBDD()
{
  $mysqli = new mysqli("192.168.50.1", "phpRoot", "Almi123", "QUEEN");
  if ($mysqli->connect_errno) {
    echo "Fallo en la conexión: " . $mysqli->connect_errno;
  }
  return $mysqli;
}
function getUser($username, $password)
{
  $mysqli = conectarBBDD();
  $sql = "SELECT * FROM trabajadores WHERE nombre = ? AND password = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) {
    echo "Fallo en la preparación de la sentencia " . $mysqli->errno;
  }
  $asignar = $sentencia->bind_param("ss", $username, $password);
  if (!$asignar) {
    echo "Fallo al asignar parámetros: " . $mysqli->errno;
  }
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) {
    echo "Fallo en la ejecución: " . $mysqli->errno;
  }
  //Recorrer los resultados
  $id = -1;
  $nombre = "";
  $contrasena = "";
  $puesto = "";
  $vincular = $sentencia->bind_result($id, $nombre, $contrasena, $puesto);
  if (!$vincular) {
    echo "Fallo al asociar parametros: " . $mysqli->errno;
  }
  if ($sentencia->fetch()) {
    $usuario = array(
      "id_trajador" => $id,
      "nombre" => $nombre,
      "password" => $contrasena,
      "puesto" => $puesto
    );
  }
  $mysqli->close();

  return $usuario;
}
