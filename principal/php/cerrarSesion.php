<?php

session_start();
$correo=$_SESSION['correo'];
#echo $correo;
$correo =" ";
echo $correo;


        if( $correo == " " ){
            echo "1";
        }else
            {
            echo"0";
         }
         
session_destroy();

?>