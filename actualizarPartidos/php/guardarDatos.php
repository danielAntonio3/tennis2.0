<?php

session_start();
$c=$_SESSION['c'];

//$usuario = 'root';
//$pass = "";

$usuario = 'root';
$pass = "1234";

$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");
$query="Select * from infopartido where encuentro_id='$c'";
$res = $mysqli->query($query);
$salida=array();
while($row = $res->fetch_assoc()){
  $salida[]=array(
    "tipo_encuentro"=>$row["tipo_enecuentro"],
     "encuentro_id"=> $row["encuentro_id"],
   "jugador_id"=> $row["jugador_id"],
     "nombre"=> $row["nombre"],
     "apellidos"=> $row["apellidos"]
  );
}

echo json_encode($salida);










 ?>
