<?php

session_start();
$c=$_SESSION['c']=$_GET['c'];

echo "$c";
?>
