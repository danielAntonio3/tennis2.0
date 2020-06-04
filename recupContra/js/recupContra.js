$(document).ready(function () {
    

    var email=$('#email');
    var pregunta=$('#pregunta');
    var respuesta=$('#respuesta');
    var Recuperar=$('#Recuperar');

    var contrasena=$('#contrasena');
    var restablecer=$('#restablecer');

    contrasena.hide();
    restablecer.hide();
    
    var contra;

    Recuperar.click(function (e) { 
        e.preventDefault();
        if(email.val()=="" || pregunta.val()==""){
            alert("Todos los campos son obligatorios");
        }else{
            var datos=('correo='+email.val()+'&pregunta='+pregunta.val()+'&respuesta='+respuesta.val());
            $.ajax({
                type: 'get',
                url: '../recupContra/php/recupContra.php',
                data: datos,
                success: function (respuestas) {
                    if (respuestas==1) {
                    contra=email.val();
                    contrasena.show();
                    restablecer.show();
                    email.hide();
                    pregunta.hide();
                    respuesta.hide();
                    Recuperar.hide();
                     
                        
                }else{
                    alert("Error en los datos");
                }
             }
            });
        }
    });

    restablecer.click(function (e) { 
        e.preventDefault();
        if(contrasena.val()==""){
            alert("Todos los campos son obligatorio");

        }else{
            var datos=('correo='+email.val()+'&contrasena='+contrasena.val())
            $.ajax({
                type: 'get',
                url: '../recupContra/php/restaContra.php',
                data: datos,
                success: function (respuestas) {
                    if (respuestas==1) {
                    
                        alert("contraseña restablecida");
                        email.hide();
                    pregunta.hide();
                    respuesta.hide();
                    window.location.replace('../inicioSesion/inicioSesion.html'); 
                        
                }else{
                    alert("Error al guardar los datos");
                    console.log("erro al guardar los datos");
                }
             }
            });
        }

        
    });



});