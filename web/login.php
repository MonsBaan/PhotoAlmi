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
    <div id='titulo'><img src='source/image/Kalmihoot.png'></div>
    <div id='CuadradoLogin'>
        <div id="error">Usuario y/o Contraseña No Validos</div>
        <form id='FormularioLogin' action='index.php'>
            <label for='user'>User</label>
            <br />
            <input id='user' type='text' placeholder='Enter User' />
            <br />
            <label for='password'>Password</label>
            <br />
            <div>
                <input type='password' class='form-control' id='password' placeholer='Enter Paswword'>
                <span toggle='#password-field' class='fas fa-eye-slash eye toggle-password' id='eye' style='left: -12px;'></span>
            </div>
            <input type='submit' value='Enviar' id='Enviar' />
        </form>
    </div>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/login.js"></script>
</body>

</html>