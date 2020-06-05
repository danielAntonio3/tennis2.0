<?php

session_start();
$b=$_SESSION['b']=$_GET['b'];

echo "$b";
?>
