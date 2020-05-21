<?php
$usuario = 'root';
$pass = "1234";

  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);

      $queryInsert ="select *from Torneo";
          if($mbd->exec($queryInsert)==true)
          {
              echo "1";
          }
          else
          {
              echo"0";
           }
                
?>