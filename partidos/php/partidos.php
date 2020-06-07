<?php
$usuario = 'root';

#contrase de mysql joshua
#$pass = "xamppadampa";
#contrase de mysql daniel
$pass = "1234";
#contrase de mysql noe
#$pass = "";


  $mbd = new PDO('mysql:host=localhost;dbname=lobotennis', $usuario, $pass);
  $mbd->exec("SET NAMES 'utf8';");

      $query ="select u.nombre,u.apellidos,j.ranking_atp,j.foto,j.pais 
      from Jugador as j inner join Usuario as u on j.user_id=u.id_user where j.ranking_atp > 0 ORDER BY j.ranking_atp";
      $stmt = $mbd->prepare($query);
      //$stmt->execute();
      
      $res=array();
      while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
        $res[]=array(
            "nombre"=>$row->nombre,
            "apellidos"=>$row->apellidos,
            "ranking_atp"=>$row->ranking_atp,
            "foto"=>$row->foto,
            "pais"=>$row->pais
        );
      }
    echo json_encode($res);
?>