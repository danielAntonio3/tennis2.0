<?php


$usuario="root";


$pass="";

session_start();
$b=$_SESSION['b'];

$fecha_encuentro=$_GET['fechaPartido'];
$idjugador1=$_GET['idjugador1'];
$idjugador2=$_GET['idjugador2'];


$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");


$queryID="Select MAX(id_encuentro) as idmax FROM Encuentro";
$res = $mysqli->query($queryID);
$idmax="";
while($row = $res->fetch_assoc()){
  $idmax=$row["idmax"];

}


  $queryInsert ="insert into Encuentro_jugador(encuentro_id,jugador_id)
    values('$idmax','$idjugador1')";
    $queryInsert2 ="insert into Encuentro_jugador(encuentro_id,jugador_id)
      values('$idmax','$idjugador2')";
$mysqli->query($queryInsert);
$mysqli->query($queryInsert2);

  echo "1";











 ?>
