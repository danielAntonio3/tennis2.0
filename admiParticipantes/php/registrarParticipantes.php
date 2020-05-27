<?php

$usuario = 'root';
#contraseña de mysql de noe
#$pass = "";
#contraseña de mysql de joshua
#$pass = "";
#contraseña de mysql de daniel
$pass = "1234";

$mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);


$federacion=$_GET['federacion'];
$licencia=$_GET['licencia'];
$velocidad=$_GET['velocidad'];
$puntos=$_GET['puntos'];
$fuerza=$_GET['fuerza'];
$encuentros=$_GET['encuentros'];
$ranking=$_GET['ranking'];
$usuario=$_GET['usuario'];
$torneo=$_GET['torneo'];

  $queryInsert ="insert into Jugador(federacion,licensia,velocidad,
  puntos_promedio,fuerza,encuentros_jugados,ranking_atp,user_id,torneo_id)
    values('$federacion','$licencia','$velocidad','$puntos','$fuerza','$encuentros','$ranking','$usuario','$torneo')";
      if($mbd->exec($queryInsert)==true)
      {echo "1";}
      else{echo"0";}

 ?>
