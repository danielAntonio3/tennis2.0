<?php

session_start();
$c=$_SESSION['c'];

$usuario = 'root';
$pass = "";

$usuario = 'root';
$pass = "";
$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");
$query="Select * from infotorneo where encuentro_id='$c'";
$res = $mysqli->query($query);
$salida=array();
while($row = $res->fetch_assoc()){
  $salida[]=array(
     "encuentro_id"=> $row["encuentro_id"],
   "jugador_id"=> $row["jugador_id"],
     "nombre"=> $row["nombre"],
     "apellidos"=> $row["apellidos"]
  );
}

echo json_encode($salida);










 ?>
