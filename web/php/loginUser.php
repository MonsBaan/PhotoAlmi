<?php
session_start();

$json = file_get_contents('http://192.168.6.195:8080/kalmihootApi/trabajadores/12345678A/Almi123');
$obj = json_decode($json);

var_dump($json);
    /*$_SESSION["id"] = $user['id'];
    $_SESSION["name"] = $user['nombre'];
    $_SESSION["sur1"] = $user['apellido1'];
    $_SESSION["sur2"] = $user['apellido2'];
    $_SESSION["dni"] = $user['dni'];
    $_SESSION["dir"] = $user['direccion'];
    $_SESSION["tlf"] = $user['telefono'];
    $_SESSION["pass"] = $user['contrasena'];
    $_SESSION["img"] = $user['imagen'];
    $_SESSION["pos"] = $user['puesto'];

    header("location: ../index.php");*/


?>