<?php
$usuario = 'root';
$pass = "1234";

$mbd = new PDO('mysql:host=localhost;dbname=usuario', $usuario, $pass);


    $nombre=$_GET['nombre'];
    $modalidad=$_GET['modalidad'];
    $categoria=$_GET['categoria'];
    $numEquipos=$_GET['numEquipos'];
    $sede=$_GET['sede'];
    $fechaIni=$_GET['fechaIni'];
    $fechaFin=$_GET['fechaFin'];
    
    
      $queryInsert ="insert into nombretabla(nombre,modalidad,categoria,numEquipos,sede,fechaIni,fechaFin)
        values('$nombre','$modalidad','$categoria','$numEquipos','$sede','$fechaIni','$fechaFin')";
          if($mbd->exec($queryInsert)==true)
          {   
              //$last_id = $mbd->lastInsertId();
              //echo $last_id;
              //$query="insert into estadoArticulo(idCarro) values('$last_id')";
              //$mbd->exec($query);
              echo "1";
          }else{
              echo"0";       
            }
                
?>