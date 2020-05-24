<?php

$usuario="root";
$pass="";

  $mdb= new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

      $nombre=$_GET['nombre'];
      $tipo=$_GET['tipo'];
      $password=$_GET['password'];



      $queryInsert ="insert into Usuario(nombre_user,clave_acces,tipo_user) values('$nombre','$password','$tipo')";

        if($mbd->exec($queryInsert)==true){
          echo "1";


        }
        else{echo"0";

        

        }




 ?>
