<?php
//----------------------------------CONEXION BBDD----------------------------------
function conectarBD()
{
  $mysqli = new mysqli("192.168.6.151", "phpRoot", "Almi123", "KalmihootWeb");
  if ($mysqli->connect_errno) {
    echo "Fallo en la conexion: " . $mysqli->connect_errno;
  }
  return $mysqli;
}
//----------------------------------SELECTS----------------------------------
function getUser($username, $password)
{
  $mysqli = conectarBD();
  $sql = "SELECT nombre, contrasena FROM trabajadores WHERE nombre = ? AND contrasena = ?";
  $sentencia = $mysqli->prepare($sql);
  //if (!$sentencia) { echo "Fallo en la preparación de la sentencia " . $mysqli->errno;}
  $asignar = $sentencia->bind_param("ss", $username, $password);
  //if (!$asignar) { echo "Fallo al asignar parámetros: " . $mysqli->errno;}
  $ejecucion = $sentencia->execute();
  //if (!$ejecucion) { echo "Fallo en la ejecución: " . $mysqli->errno;}
  $nombre = "";
  $contrasena = "";
  $vincular = $sentencia->bind_result($nombre, $contrasena);
  //if (!$vincular) { echo "Fallo al asociar parametros: " . $mysqli->errno;}

  if ($sentencia->fetch()) {
    $usuario = array(
      "nombre" => $nombre,
      "password" => $contrasena
    );
  }
  $mysqli->close();
  return $usuario;
}
//----------------------------------UPDATES----------------------------------
//----------------------------------DELETES----------------------------------
