<?php

$usuario = 'root';
$pass = "1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

    $correo=$_GET['correo'];
    $pregunta=$_GET['pregunta'];
    $respuesta=$_GET['respuesta'];

    
    $queryBusqueda ="select correo,pregunta,respuesta from Usuario where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
      $correoR=$row['correo'];
      $preguntaR=$row['pregunta'];
      $respuestaR=$row['respuesta'];
      
      if($correo==$correoR && $pregunta == $preguntaR && $respuesta==$respuestaR){
        echo "1";
        }else{
        echo"0";
        }
?>