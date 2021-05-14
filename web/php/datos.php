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
function loginAjax($username, $password)
{
  $mysqli = conectarBD();
  $sql = "SELECT nombre FROM trabajadores WHERE nombre = ? AND contrasena = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) {
    echo "loginAjax fallo en la preparación de la sentencia " . $mysqli->errno;
  }
  $vincular = $sentencia->bind_param("ss", $username, $password);
  if (!$vincular) {
    echo "loginAjax fallo asociando parametros " . $mysqli->errno;
  }
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) {
    echo "loginAjax fallo en la ejecución: " . $mysqli->errno;
  }

  $name = "";
  $vincular = $sentencia->bind_result($name);
  if (!$vincular) {
    echo "loginAjax fallo asociando parametros " . $mysqli->errno;
  }
  if ($sentencia->fetch()) {
    $usuario = array(
      "nombre" => $name
    );
  }
  return $usuario;
}

function loginPhp($username, $password)
{
  $mysqli = conectarBD();
  $sql = "SELECT id_trabajador, nombre, apellido1, apellido2, dni, direccion, telefono, contrasena, imagen, descripcion FROM trabajadores INNER JOIN puestos ON trabajadores.puesto = puestos.id_puesto WHERE nombre = ? AND contrasena = ?";
  $sentencia = $mysqli->prepare($sql);
  //if (!$sentencia) { echo "Fallo en la preparación de la sentencia " . $mysqli->errno;}
  $asignar = $sentencia->bind_param("ss", $username, $password);
  //if (!$asignar) { echo "Fallo al asignar parámetros: " . $mysqli->errno;}
  $ejecucion = $sentencia->execute();
  //if (!$ejecucion) { echo "Fallo en la ejecución: " . $mysqli->errno;}
  $id = -1;
  $nombre = "";
  $apellido1 = "";
  $apellido2 = "";
  $dni = "";
  $direccion = "";
  $telefono = -1;
  $contrasena = "";
  $imagen = "";
  $puesto = -1;
  $vincular = $sentencia->bind_result($id, $nombre, $apellido1, $apellido2, $dni, $direccion, $telefono, $contrasena, $imagen, $puesto);
  //if (!$vincular) { echo "Fallo al asociar parametros: " . $mysqli->errno;}

  if ($sentencia->fetch()) {
    $usuario = array(
      "id" => $id,
      "nombre" => $nombre,
      "apellido1" => $apellido1,
      "apellido2" => $apellido2,
      "dni" => $dni,
      "direccion" => $direccion,
      "telefono" => $telefono,
      "contrasena" => $contrasena,
      "imagen" => $imagen,
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

function updateUser($nombre, $direccion, $telefono, $contrasena)
{

  var_dump($direccion);

  $mysqli = conectarBD();
  $sql = "UPDATE trabajadores SET direccion = ?, telefono = ?, contrasena = ? WHERE nombre = ?";
  $sentencia = $mysqli->prepare($sql);
  if (!$sentencia) {
    echo "Fallo en la preparación de la sentencia " . $mysqli->errno;
  }
  $asignar = $sentencia->bind_param("siss", $direccion, $telefono, $contrasena, $nombre);
  if (!$asignar) {
    echo "Fallo al asignar parámetros: " . $mysqli->errno;
  }
  $ejecucion = $sentencia->execute();
  if (!$ejecucion) {
    echo "Fallo en la ejecución: " . $mysqli->errno;
  }
  
  $mysqli->close();
  return true;
}
//----------------------------------DELETES----------------------------------
