<?php

session_start();
$z=$_SESSION['z'];

$usuario = 'root';

#contrase de mysql joshua
// $pass = "xamppadampa";
#contrase de mysql daniel
$pass = "1234";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select *from Usuario where id_user='".$z."'";
      $stmt = $mbd->prepare($query);
      $stmt->execute();
      
      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
        $res[]=array(
          "contrasena"=> $row->contrasena,
	        "nombre"=> $row->nombre,
          "apellidos"=> $row->apellidos,
          "correo"=> $row->correo,
          "id_user"=> $row->id_user
        );
      }
    echo json_encode($res);
?>