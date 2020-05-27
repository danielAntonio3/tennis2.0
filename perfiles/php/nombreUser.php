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
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select nombre,apellidos from Usuario where correo='".$correo."'";
      #echo $query;

      $stmt = $mbd->prepare($query);
      $stmt->execute();

      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
         $res[]=array(
            "nombre"=> $row->nombre,
	        "apellidos"=> $row->apellidos, 
         );
     }
     echo json_encode($res);
?>