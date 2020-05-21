<?php
$usuario = 'root';
$pass = "1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);


    $nombre=$_GET['nombre'];
    $modalidad=$_GET['modalidad'];
    $categoria=$_GET['categoria'];
    $numEquipos=$_GET['numEquipos'];
    $sede=$_GET['sede'];
    $fechaInicio=$_GET['fechaInicio'];
    $fechaFin=$_GET['fechaFin'];

      $queryInsert ="insert into Torneo(nombre_torneo,fecha_inicio,fecha_fin,modalidad_torneo,categoria,num_equipos,sede)
        values('$nombre','$fechaInicio','$fechaFin','$modalidad','$categoria','$numEquipos','$sede')";
          if($mbd->exec($queryInsert)==true)
          {echo "1";}
          else{echo"0";}
                
?>