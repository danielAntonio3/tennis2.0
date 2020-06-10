<?php

session_start();
$idTorneo=$_SESSION['idTorneo']=$_GET['idTorneo'];

echo "$idTorneo";
?>
