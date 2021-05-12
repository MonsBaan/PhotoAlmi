<!DOCTYPE html>
<html lang="en">

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
    
    <?php
    echo "<div id='titulo'><img src='source/image/Kalmihoot.png'></div>";
    echo "<div id='CuadradoLogin'>";
    echo    "<form id='FormularioLogin'>";
    echo        "<label for='user'>User</label>";
    echo        "<br />";
    echo        "<input id='user' type='text' placeholder='Enter User' />";
    echo        "<br />";
    echo        "<label for='password'>Password</label>";
    echo        "<br />";
    echo        "<div>";
    echo        "<input type='password' class='form-control' id='password' placeholer='Enter Paswword'>";
    echo        "<span toggle='#password-field' class='fas fa-eye-slash field-icon toggle-password' id='eye' style='left: -11px;'></span>";
    echo        "</div>";
    echo        "<input type='submit' value='Enviar' id='Enviar' />";
    echo    "</form>";
    echo "</div>";
    ?>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/index.js"></script>
</body>

</html>