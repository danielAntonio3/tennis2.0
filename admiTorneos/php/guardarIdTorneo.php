<?php
 
session_start();
$e=$_SESSION['e']=$_GET['e'];

echo "$e";               
?>