<?php
session_start();
$correo=$_SESSION['correo'];

$usuario = 'root';
#contraseña de mysql de joshua
#$pass = "xamppadampa";
#contraseña de mysql de daniel
$pass = "";




$mysqli = new mysqli('localhost', $usuario, $pass, 'lobotennis');
$mysqli->set_charset("utf8");


$queryNombre="Select nombre, apellidos from Usuario where correo='$correo'";
$res = $mysqli->query($queryNombre);
while($row = $res->fetch_assoc()){
     $nombre=$row["nombre"];
     $apellidos=$row["apellidos"];

}

$queryIdjugador="Select encuentro_id from infopartido where nombre='$nombre'
and apellidos='$apellidos'";
$arregloencuentros=array();
$setganador=array();
$setperdedor=array();
$arreglooponente=array();

$nombreCompleto=$nombre." ".$apellidos;
$res2 = $mysqli->query($queryIdjugador);
while($row2=$res2->fetch_assoc()){
  array_push($arregloencuentros,$row2["encuentro_id"]);

}

$arreglofechas=array();

$n=0;
while ($n<count($arregloencuentros)) {
  $encuentrotemp=$arregloencuentros[$n];
  $queryfechas="Select fecha_encuentro from Encuentro where id_encuentro='$encuentrotemp'";
  $resfechas = $mysqli->query($queryfechas);
  while ($row6=$resfechas->fetch_assoc()) {

      array_push($arreglofechas,$row6["fecha_encuentro"]);
  }
  $n++;
}


for ($i=0; $i <count($arregloencuentros) ; $i++) {

  $encuentrotemp=$arregloencuentros[$i];
  $queryoponente="Select nombre, apellidos from infopartido
  where nombre <> '$nombre' and apellidos <> '$apellidos' and encuentro_id='$encuentrotemp'";
  $resoponente = $mysqli->query($queryoponente);
  while($row5=$resoponente->fetch_assoc()){
      $nombreoponente=$row5["nombre"]." ".$row5["apellidos"];
    array_push($arreglooponente,$nombreoponente);

  }


}



for ($i=0; $i <count($arregloencuentros) ; $i++) {

      $encuentrotemp=$arregloencuentros[$i];
      $querySet="Select COUNT(num_set) from Setj where ganador='$nombreCompleto'
      and encuentro_id='$encuentrotemp'";
      $res3 = $mysqli->query($querySet);
      while($row3=$res3->fetch_assoc()){
        array_push($setganador,$row3["COUNT(num_set)"]);

      }
      $querySet2="Select COUNT(num_set) from Setj where ganador <> '$nombreCompleto'
      and encuentro_id='$encuentrotemp'";

      $res4 = $mysqli->query($querySet2);
      while($row4=$res4->fetch_assoc()){
        array_push($setperdedor,$row4["COUNT(num_set)"]);
      }


}




$salida=array();
$x=0;

while($x<count($arregloencuentros)){
  $salida[]=array(
     "encuentro_id"=>$arregloencuentros[$x],
   "nombreJugador"=>$nombreCompleto,
     "nombreOponente"=>$arreglooponente[$x],
     "setsJugador"=>$setganador[$x],
     "setsOponente"=>$setperdedor[$x],
     "fecha"=>$arreglofechas[$x]
  );
  $x++;
}

echo json_encode($salida);
















 ?>
