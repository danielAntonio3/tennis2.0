<?php

$usuario="root";


$pass="1234";

session_start();
$b=$_SESSION['b'];

$fecha_encuentro=$_GET['fechaPartido'];
$tipo_encuentro=$_GET['tpartido'];
$num_cancha=$_GET['cancha'];
$torneo_idtorneo=$_GET['torneo_idtorneo'];
$monitor=$_GET['monitor'];



$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");



  $queryInsert ="insert into Encuentro(fecha_encuentro,tipo_enecuentro,num_cancha,
  torneo_idtorneo,monitor_idmonitor)
    values('$fecha_encuentro','$tipo_encuentro','$num_cancha','$torneo_idtorneo','$monitor')";
$mysqli->query($queryInsert);

  echo "1";







 ?>
