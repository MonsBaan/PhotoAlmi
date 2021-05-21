<!DOCTYPE html>
<html lang="en">
<?php
session_start();
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' type='text/css' href='css/login.css'>
    <link rel="icon" href="source/image/StaleMans.png" type="image/icon type">
    <title>KalmiHoot</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet">
</head>

<body>
    <div id='titulo'><img src='source/image/Kalmihoot.png'></div>
    <div id='CuadradoLogin'>
        <div id="error">Incorrect User or Password</div>
        <form id='FormularioLogin' action='index.php' method="post">
            <label for='user'>Personal ID</label><br />
            <input id='dni' type='text' placeholder='Enter Personal ID' name='dni' /><br />
            <label for='password'>Password</label><br />
            <div>
                <input type='password' class='form-control' id='password' placeholer='Enter Paswword' name='password'>
                <span toggle='#password-field' class='fas fa-eye-slash eye toggle-password' id='eye' style='left: -12px;'></span>
            </div>
            <input type='submit' value='Submit' id='Enviar' />
        </form>
    </div>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/login.js"></script>
</body>

</html>