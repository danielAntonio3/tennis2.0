<?php

$usuario = 'root';

#contrase de mysql joshua
// $pass = "xamppadampa";
// contrase de mysql daniel
$pass = "";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select *from Torneo";
      $stmt = $mbd->prepare($query);
      $stmt->execute();

      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
        $fechaInicio = $row->fecha_inicio;
        $fechaInicio = date("M d");
        $fechaFin = $row->fecha_fin;
        $fechaFin = date("M d");
        $res[]=array(
          "id_torneo"=> $row->id_torneo,
	        "nombre_torneo"=> $row->nombre_torneo,
          "fecha_inicio"=> $fechaInicio,
          "fecha_fin"=> $fechaFin,
          "modalidad_torneo"=> $row->modalidad_torneo,
          "categoria"=> $row->categoria,
          "num_equipos"=> $row->num_equipos,
          "sede"=> $row->sede
        );
      }
    echo json_encode($res);




?>
