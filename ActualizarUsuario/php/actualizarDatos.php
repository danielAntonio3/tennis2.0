<?php

$usuario = 'root';

#contrase de mysql joshua
#$pass = "xamppadampa";
#contrase de mysql daniel
$pass="1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  
    $nombre=$_GET['nombre'];
    $apellido=$_GET['apellido'];
    $contrasena=$_GET['contrasena'];
    $id=$_GET['id'];

    $queryInsert ="UPDATE Usuario SET nombre='".$nombre."', apellidos='".$apellido."',
                    contrasena='".$contrasena."' WHERE id_user='".$id."'";
        #echo "$queryInsert";

          if($mbd->exec($queryInsert)==true){
                     echo "1";
            }
                else{
                        echo"0";
                    }
        
   

  #session_destroy();
    
?>