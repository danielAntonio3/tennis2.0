<?php

session_start();
$correo=$_SESSION['correo'];
#echo $correo;

$usuario = 'root';
#contraseña de mysql de joshua
#$pass = "xamppadampa";
#contraseña de mysql de daniel
$pass = "1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

      $queryBusqueda ="select correo,tipo_user from Usuario where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
         $correoR=$row['correo'];
         $tipo_usuario=$row['tipo_user'];

         if($correo ==$correoR){
            echo "$tipo_usuario";
         }else
          {
            echo"0";
         }
?>
