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

    
    $queryBusqueda ="select correo from Usuario where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
      $correoR=$row['correo'];
      
      if($correo!=$correoR){
        $queryInsert ="insert into Usuario(nombre,apellidos,correo,contrasena,tipo_user,pregunta,respuesta)
        values('$nombre','$apellido','$correo','$password','$tipUsuario','$pregunta','$respuesta')";
          if($mbd->exec($queryInsert)==true){
            echo "1";
          }else
              {
                echo"0";
              }
        }else{
        echo"0";
        }
?>
