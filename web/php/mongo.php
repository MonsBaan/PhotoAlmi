<?php
$dataJson = json_decode( file_get_contents("http://192.168.6.195:8080/kalmihootApi/preguntas"), true);

//var_dump($dataJson);

for($i = 0; $i < count($dataJson); $i++){
    echo $dataJson['data'][$i]['categoria']. "<br>";
}
?>