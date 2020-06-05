<?php



$usuario = 'root';
$pass = "1234";

$mdb=new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
$mbd->exec("SET NAMES 'utf8';");


echo "Exito";



 ?>
