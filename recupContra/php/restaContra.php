<?php


$usuario = 'root';
$pass = "1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

 $correo=$_GET['correo'];
 $contrasena=$_GET['contrasena'];


    $queryInsert =" update Usuario set contrasena='".$contrasena."' where correo='".$correo."'";
    
   if($mbd->exec($queryInsert)==true){
       echo "1";
     }else
         {
           echo"0";
         }
?>