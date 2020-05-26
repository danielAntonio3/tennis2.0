<?php

//session_start();
//$correo=$_SESSION['correo']=$_GET['correo'];

$usuario = 'root';
$pass = "xamppadampa";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

  $correo=$_POST['correo'];
  $contrasena=$_POST['contrasena'];
   
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