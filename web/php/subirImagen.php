<?php
$cont = 0;

if (($_FILES["file"]["type"] == "image/pjpeg") || ($_FILES["file"]["type"] == "image/jpeg")  || ($_FILES["file"]["type"] == "image/png")  || ($_FILES["file"]["type"] == "image/gif")) {
  while (file_exists("../source/image/preguntas/".$cont)) {
    $cont = $cont + 1;
  }

  if (move_uploaded_file($_FILES["file"]["tmp_name"], "../source/image/preguntas/" . $cont)) {
    echo $cont;
  } else {
    echo "../source/image/StaleMans.png";
  }
} else {
  echo "StaleMans.png";
}
