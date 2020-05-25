<?php

$usuario = 'root';
$pass = "1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

    $nombre=$_GET['nombre'];
    $apellido=$_GET['apellido'];
    $tipUsuario=$_GET['tipUsuario'];
    $correo=$_GET['correo'];
    $password=$_GET['contrasena'];
    $pregunta=$_GET['pregunta'];
    $respuesta=$_GET['respuesta'];

      $queryInsert ="insert into Usuario(nombre,apellidos,correo,contrasena,tipo_user,pregunta,respuesta)
        values('$nombre','$apellido','$correo','$password','$tipUsuario','$pregunta','$respuesta')";
          if($mbd->exec($queryInsert)==true)
          {echo "1";}
          else{echo"0";}
?>
