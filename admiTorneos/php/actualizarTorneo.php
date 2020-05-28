<?php
 
session_start();
$e=$_SESSION['e'];

#echo "hola bebe.$e";  

$usuario = 'root';

#contrase de mysql joshua
#$pass = "xamppadampa";
#contrase de mysql daniel
$pass="1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  

    $nombre=$_GET['nombre'];
    $modalidad=$_GET['modalidad'];
    $sede=$_GET['sede'];
    $fechaInicio=$_GET['fechaInicio'];
    $fechaFin=$_GET['fechaFin'];

    $queryInsert ="UPDATE Torneo SET nombre_torneo='".$nombre."', modalidad_torneo='".$modalidad."',
                    sede='".$sede."', fecha_inicio='".$fechaInicio."' , fecha_fin='".$fechaFin."' WHERE id_torneo='".$e."'";

          if($mbd->exec($queryInsert)==true){
                     echo "1";
            }
                else{
                        echo"0";
                    }
        
   

  session_destroy();
    
?>