<?php
echo $_FILES["file"]["name"];


if (($_FILES["file"]["type"] == "image/pjpeg") || ($_FILES["file"]["type"] == "image/jpeg")  || ($_FILES["file"]["type"] == "image/png")  || ($_FILES["file"]["type"] == "image/gif")) {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "../source/image/" . $_FILES['file']['name'])) {
      echo "../source/image/" . $_FILES['file']['name'];
    } else {
      echo " No se ha movido la imagen";
    }
  
} else {
  echo "Tipo de archivo no soportado";
}

/*
<?php
$cont = 0;

if (($_FILES["file"]["type"] == "image/pjpeg") || ($_FILES["file"]["type"] == "image/jpeg")  || ($_FILES["file"]["type"] == "image/png")  || ($_FILES["file"]["type"] == "image/gif")) {


  if (move_uploaded_file($_FILES["file"]["tmp_name"], "../source/image/preguntas/" . $cont)) {
    echo $cont;
  } else {
    echo "StaleMans.png";
  }
} else {
  echo "Tipo de archivo no soportado";
}


*/

