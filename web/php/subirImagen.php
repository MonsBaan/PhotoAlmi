<?php
echo $_FILES["file"]["name"];


if (($_FILES["file"]["type"] == "image/pjpeg") || ($_FILES["file"]["type"] == "image/jpeg")  || ($_FILES["file"]["type"] == "image/png")  || ($_FILES["file"]["type"] == "image/gif")) {
  if (file_exists("../source/image/")) {
    echo "Archivo ya Existente";
  } else {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "../source/image/" . $_FILES['file']['name'])) {
      echo "../source/image/" . $_FILES['file']['name'];
    } else {
      echo " No se ha movido la imagen";
    }
  }
} else {
  echo "Tipo de archivo no soportado";
}







/*
$target_dir = "/var/www/html/PhotoAlmi/web/source/image/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
var_dump($_FILES["fileToUpload"]["name"]);
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
     
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }


// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    //echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
 //var_dump($_FILES["fileToUpload"]["name"]);
 // var_dump($move_uploaded_file);

}


//var_dump("");
*/
