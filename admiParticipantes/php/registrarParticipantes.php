<?php


session_start();
$e=$_SESSION['e'];

$usuario = 'root';
$pass = "";
mysql_connect("localhost","root","","lobotennis");
//$mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
if (!mysql_select_db("lobotennis")) {
  echo "No seleccionada ".mysql_error();
}



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
    if(mysql_query($queryInsert)){
      $querycount="Select COUNT(id_jugador) as total from Jugador where torneo_id='$torneo'";
        $valor="";
        $resultado=mysql_query($querycount);
        $row=mysql_fetch_assoc($resultado);
        $actual=(int)$row['total'];

        $queryequipos="Select num_equipos from Torneo where id_torneo='$torneo'";
        $resequipos=mysql_query($queryequipos);
        $row2=mysql_fetch_assoc($resequipos);
        $limite=(int)$row2['num_equipos'];


        $queryactualizar="Update Torneo set estado='1' where id_torneo='$torneo'";
        if ($actual==$limite) {
          mysql_query($queryactualizar);
          echo "1";
        }
        else {
          echo "1";
        }


    }
    else{


    }
      //$mbd->exec($queryInsert);
    /*  $querycount="Select COUNT(id_jugador) as total from Jugador where torneo_id='$torneo'";
      $valor="";
      $resultado=mysql_query($querycount);
      $row=mysql_fetch_assoc($resultado);
      $actual=(int)$row['total'];

      $queryequipos="Select num_equipos from Torneo where id_torneo='$torneo'";
      $resequipos=mysql_query($queryequipos);
      $row2=mysql_fetch_assoc($resequipos);
      $limite=(int)$row2['num_equipos'];


      $queryactualizar="Update Torneo set estado=1 where id_torneo='$torneo'";
      if ($actual==$limite) {
        mysql_query($queryactualizar);
        echo "1";
      }
      else {
        echo "1";
      }

  $querycount="Select COUNT(id_jugador) as total from Jugador where torneo_id='1'";
  if ($mbd->exec($querycount)==true) {
     echo "1";


  }
  else{
    echo "0";
  }

*/


 ?>
