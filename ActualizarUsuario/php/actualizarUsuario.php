<?php
$usuario = 'root';

#contrase de mysql joshua
// $pass = "xamppadampa";
#contrase de mysql daniel
$pass = "1234";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select *from Usuario";
      $stmt = $mbd->prepare($query);
      $stmt->execute();
      
      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
        $res[]=array(
          "id_user"=> $row->id_user,
	        "nombre"=> $row->nombre,
          "apellidos"=> $row->apellidos,
          "correo"=> $row->correo,
          "tipo_user"=> $row->tipo_user
        );
      }
    echo json_encode($res);
?>