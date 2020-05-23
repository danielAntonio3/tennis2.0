$(document).ready(function () {
    

    var nombre=$('#nombre');
    var apellido=$('#apellidos');
    var tipUsuario=$('#tipo');
    var correo=$('#correo');
    var password=$('#correo');
    var pregunta=$('#pregunta');
    var respuesta=$('#respuesta');
    

    $('#botonRegistrar').click(function(){
        if(nombre.val()=="" || apellido.val()=="" || tipUsuario.val()=="" || correo.val()=="" || password.val()==""){
            alert("todos los campos son obligatorios");
        }else{

            var datos=('nombre='+nombre.val()+'&apellido='+apellido.val()+'&tipUsuario='+tipUsuario.val()+'&correo='+correo.val()
                       +'&contrasena='+password.val()+'&pregunta='+pregunta.val()+'&respuesta='+respuesta.val());
                       alert(datos);



        }
    
    })
});