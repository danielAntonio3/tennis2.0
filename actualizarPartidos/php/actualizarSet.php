<?php

$usuario = 'root';
$pass = "1234";
$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");
$numset=$_GET['numset'];
$tiempojuego=$_GET['tiempo_juego'];
$encuentro_id=$_GET['encuentro_id'];
$ganador=$_GET['ganador'];
$puntosganador=$_GET['puntos_ganador'];
$puntosperdedor=$_GET['puntos_perdedor'];



$queryInsert ="insert into Setj(num_set,tiempo_juego,encuentro_id,ganador,puntos_ganador,puntos_perdedor)
  values('$numset','$tiempojuego','$encuentro_id','$ganador','$puntosganador','$puntosperdedor')";

$mysqli->query($queryInsert);






 ?>
