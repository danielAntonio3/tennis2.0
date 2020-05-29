<?php

session_start();
$v=$_SESSION['v']=$_GET['v'];

echo "$v";
?>
