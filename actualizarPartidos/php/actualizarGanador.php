<?php

$usuario = 'root';
$pass = "1234";
$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");
$encuentro_id=$_GET['idencuentro'];
$ganador=$_GET['ganador'];



$queryUpdate ="update Encuentro set ganador='$ganador' where id_encuentro='$encuentro_id'";

$mysqli->query($queryUpdate);






 ?>
