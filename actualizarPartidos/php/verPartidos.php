<?php

$usuario = 'root';

#contrase de mysql joshua
// $pass = "xamppadampa";
// contrase de mysql daniel
$pass = "1234";
//contraseña de noe
//$pass = "";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select * from infotorneo";
      $stmt = $mbd->prepare($query);
      $stmt->execute();

      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
        $res[]=array(
          "encuentro_id"=> $row->encuentro_id,
          "jugador_id"=> $row->jugador_id,
          "nombre"=> $row->nombre,
          "apellidos"=> $row->apellidos
        );
      }
    echo json_encode($res);




?>
