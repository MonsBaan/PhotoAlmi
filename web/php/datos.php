<?php
//----------------------------------CONEXION BBDD----------------------------------
function conectarBD()
{
  $mysqli = new mysqli("192.168.6.160", "phpRoot", "Almi123", "KalmihootWeb");
  if ($mysqli->connect_errno) {
    echo "Fallo en la conexion: " . $mysqli->connect_errno;
  }
  return $mysqli;
}
//----------------------------------SELECTS----------------------------------
function loginUser($username, $password){
  $mysqli = conectarBD();
  $sql = "SELECT nombre FROM trabajadores WHERE nombre = ? AND contrasena = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) { echo "loginUser fallo en la preparación de la sentencia " . $mysqli->errno;}
  $vincular = $sentencia->bind_param("ss", $username, $password);
  if (!$vincular) { echo "loginUser fallo asociando parametros " . $mysqli->errno;}

  $ejecucion = $sentencia->execute();
  if (!$ejecucion) { echo "loginUser fallo en la ejecución: " . $mysqli->errno;}
  $nombre = "";
  $vincular = $sentencia->bind_result($nombre);
  if (!$vincular) { echo "loginUser fallo al asociar parametros: " . $mysqli->errno;}
  if ($sentencia->fetch()) {
    $usuario = array(
      "nombre"=> $nombre
    );
  };

  return $usuario;

}



function getUser()
{
  $mysqli = conectarBD();
  $sql = "SELECT nombre, apellido1, apellido2, direccion, telefono, contrasena, puesto FROM trabajadores";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) { echo "Fallo en la preparación de la sentencia " . $mysqli->errno;}
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) { echo "Fallo en la ejecución: " . $mysqli->errno;}
  $nombre = "";
  $apellido1 = "";
  $apellido2 = "";
  $direccion = "";
  $telefono = -1;
  $contrasena = "";
  $puesto = -1;
  $vincular = $sentencia->bind_result($nombre, $apellido1, $apellido2, $direccion, $telefono, $contrasena, $puesto);
  if (!$vincular) { echo "Fallo al asociar parametros: " . $mysqli->errno;}

  if ($sentencia->fetch()) {
    $usuario = array(
      "nombre" => $nombre,
      "apellido1" => $apellido1,
      "apellido2" => $apellido2,
      "direccion" => $direccion,
      "telefono" => $telefono,
      "password" => $contrasena,
      "puesto" => $puesto
    );
  }
  $mysqli->close();
  return $usuario;
}



/* MONGODB

MOSTRAR

BORRAR


function añadirPregunta()
{
  $mysqli = conectarBD();
  $sql = "INSERT nombre, contrasena FROM trabajadores WHERE nombre = ? AND contrasena = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) { echo "Fallo en la preparación de la sentencia " . $mysqli->errno;}
  $asignar = $sentencia->bind_param("ss", $username, $password);
  if (!$asignar) { echo "Fallo al asignar parámetros: " . $mysqli->errno;}
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) { echo "Fallo en la ejecución: " . $mysqli->errno;}
  $nombre = "";
  $contrasena = "";
  $vincular = $sentencia->bind_result($nombre, $contrasena);
  if (!$vincular) { echo "Fallo al asociar parametros: " . $mysqli->errno;}

}

function actualizarPregunta()
{
  $mysqli = conectarBD();
  $sql = "UPDATE nombre, contrasena FROM trabajadores WHERE nombre = ? AND contrasena = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) { echo "Fallo en la preparación de la sentencia " . $mysqli->errno;}
  $asignar = $sentencia->bind_param("ss", $username, $password);
  if (!$asignar) { echo "Fallo al asignar parámetros: " . $mysqli->errno;}
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) { echo "Fallo en la ejecución: " . $mysqli->errno;}
  $nombre = "";
  $contrasena = "";
  $vincular = $sentencia->bind_result($nombre, $contrasena);
  if (!$vincular) { echo "Fallo al asociar parametros: " . $mysqli->errno;}

}
*/

//----------------------------------UPDATES----------------------------------

function updateUser($nombre)
{
  $mysqli = conectarBD();
  $sql = "UPDATE direccion, telefono, contrasena FROM trabajadores WHERE nombre = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) {
    echo "Fallo en la preparación de la sentencia " . $mysqli->errno;
  }
  $asignar = $sentencia->bind_param("s", $nombre);
  if (!$asignar) {
    echo "Fallo al asignar parámetros: " . $mysqli->errno;
  }
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) {
    echo "Fallo en la ejecución: " . $mysqli->errno;
  }
  $direccion = "";
  $telefono = -1;
  $contrasena = "";
  $vincular = $sentencia->bind_result($direccion, $telefono, $contrasena);
  if (!$vincular) {
    echo "Fallo al asociar parametros: " . $mysqli->errno;
  }

  if ($sentencia->fetch()) {
    $datosUsuario = array(
      "direccion" => $direccion,
      "telefono" => $telefono,
      "password" => $contrasena
    );
  }
  $mysqli->close();
  return $datosUsuario;
}
//----------------------------------DELETES----------------------------------
