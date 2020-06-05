<?php

session_start();
$b=$_SESSION['b'];



$usuario = 'root';
$pass = "1234";

$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");
$query="Select * from infojugador where torneo_id='$b'";
$res = $mysqli->query($query);
$salida=array();
while($row = $res->fetch_assoc()){
  $salida[]=array(
     "id_jugador"=> $row["id_jugador"],
   "nombre"=> $row["nombre"],
     "apellidos"=> $row["apellidos"],
     "id_user"=> $row["id_user"],
     "torneo_id"=> $row["torneo_id"]
  );
}

echo json_encode($salida);








/*
$mdb=new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
$mbd->exec("SET NAMES 'utf8';");


$query="Select * from infojugador where torneo_id='$b'";
$stmt = $mbd->prepare($query);
$stmt->execute();
$res=array();

while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
   $res[]=array(
      "id_jugador"=> $row->id_jugador,
    "nombre"=> $row->nombre,
      "apellidos"=> $row->apellidos,
      "id_user"=> $row->id_user,
      "torneo_id"=> $row->torneo_id
   );
}






$usuario = 'root';

#contrase de mysql joshua
#$pass = "xamppadampa";
#contrase de mysql daniel
$pass = "";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select *from Jugador where torneo_id='".$b."'";
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
*/
?>
