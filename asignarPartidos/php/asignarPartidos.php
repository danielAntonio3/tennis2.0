<?php

session_start();
$b=$_SESSION['b'];

$nombrejugador=$_GET['jugador'];

  $usuario="root";


  $pass="";


$mbd=new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);







  echo "$b";




 ?>
