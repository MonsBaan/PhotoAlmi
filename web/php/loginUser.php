<?php
session_start();
include "./datos.php";

$user = loginPhp($_POST['user'], $_POST['password']);

if (sizeOf($user)==0) {
    header("location: ../login.php");
}else {
    $_SESSION["id"] = $user['id'];
    $_SESSION["name"] = $user['nombre'];
    $_SESSION["sur1"] = $user['apellido1'];
    $_SESSION["sur2"] = $user['apellido2'];
    $_SESSION["dni"] = $user['dni'];
    $_SESSION["dir"] = $user['direccion'];
    $_SESSION["tlf"] = $user['telefono'];
    $_SESSION["pass"] = $user['contrasena'];
    $_SESSION["img"] = $user['imagen'];
    $_SESSION["pos"] = $user['puesto'];

    header("location: ../index.php");

}
?>