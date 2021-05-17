<?php
session_start();

session_destroy();

/*
unset($_SESSION["id"]);
unset($_SESSION["name"]);
unset($_SESSION["sur1"]);
unset($_SESSION["sur2"]);
unset($_SESSION["dni"]);
unset($_SESSION["dir"]);
unset($_SESSION["tlf"]);
unset($_SESSION["pass"]);
unset($_SESSION["img"]);
unset($_SESSION["pos"]);
    */
header("location: ../login.php");

?>