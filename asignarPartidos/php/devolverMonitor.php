<?php
$usuario="root";
$pass="1234";

$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");
$query="Select * from infomonitor";
$res = $mysqli->query($query);
$salida=array();
while($row = $res->fetch_assoc()){
  $salida[]=array(
     "id_monitor"=> $row["id_monitor"],
   "licensia_fed"=> $row["licensia_fed"],
     "id_userM"=> $row["id_userM"],
     "nombre"=> $row["nombre"],
     "apellidos"=> $row["apellidos"]
  );
}

echo json_encode($salida);
 ?>
