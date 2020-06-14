<?php
 
session_start();
$z=$_SESSION['z']=$_GET['z'];

echo "$z";               
?>