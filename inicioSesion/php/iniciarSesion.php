<?php

session_start();
$correo=$_SESSION['correo']=$_GET['correo'];
#echo $correo;

$usuario = 'root';
#$pass = "xamppadampa";
$pass ="1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

  $correo=$_GET['correo'];
  $contrasena=$_GET['contrasena'];
   
      $queryBusqueda ="select correo,contrasena,tipo_user from Usuario where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
         $correoR=$row['correo'];
         $contraR=$row['contrasena'];
         $tipo_usuario=$row['tipo_user'];

         if($correo ==$correoR  && $contrasena == $contraR){
            echo "$tipo_usuario";
         }else
          {
            echo"0";
         }
?>