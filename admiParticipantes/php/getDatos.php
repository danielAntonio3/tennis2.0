<?php

session_start();
$v=$_SESSION['v'];

#echo "hola bebe.$e";

$usuario = 'root';

#contrase de mysql joshua
#$pass = "xamppadampa";
#contrase de mysql daniel
$pass = "1234";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select *from Torneo where id_torneo='".$v."'";
      $stmt = $mbd->prepare($query);
      $stmt->execute();

      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
         $res[]=array(
            "id_torneo"=> $row->id_torneo,
	        "nombre_torneo"=> $row->nombre_torneo,
            "fecha_inicio"=> $row->fecha_inicio,
            "fecha_fin"=> $row->fecha_fin,
            "modalidad_torneo"=> $row->modalidad_torneo,
            "categoria"=> $row->categoria,
            "num_equipos"=> $row->num_equipos,
            "sede"=> $row->sede
         );
     }
     echo json_encode($res);

?>
