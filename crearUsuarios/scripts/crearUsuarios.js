$(document).ready(function () {
    
    var nombre=$('#nombre');
    var apellido=$('#apellidos');
    var tipUsuario=$('#tipos');
    var correo=$('#correo');
    var password=$('#contrasena');
    var pregunta=$('#pregunta');
    var respuesta=$('#respuesta');
    

    $('#botonRegistrar').click(function(event){
        event.preventDefault();
        var datos=('nombre='+nombre.val()+'&apellido='+apellido.val()+'&tipUsuario='+tipUsuario.val()+'&correo='+correo.val()
                       +'&contrasena='+password.val()+'&pregunta='+pregunta.val()+'&respuesta='+respuesta.val());
                    console.log(datos);
                    
        
        if(nombre.val()=="" || apellido.val()=="" || tipUsuario.val()=="" || correo.val()=="" || password.val()==""){
           alert("todos los campos son obligatorios");
        }else{
            var datos=('nombre='+nombre.val()+'&apellido='+apellido.val()+'&tipUsuario='+tipUsuario.val()+'&correo='+correo.val()
                       +'&contrasena='+password.val()+'&pregunta='+pregunta.val()+'&respuesta='+respuesta.val());
            $.ajax({
                type: 'get',
                url: '../crearUsuarios/php/crearUsuario.php',
                data: datos,
                success: function (respuestas) {
                    if (respuestas==1) {
                        alert("Los datos se guardaron con exito");
                        console.log("los dato se gusardaron con exito");
                        nombre.val('');
                        apellido.val('');
                        tipUsuario.val('');
                        correo.val('');
                        password.val('');
                        pregunta.val('');
                        respuesta.val('');
                }else{
                    alert("Error al guardar los datos");
                    console.log("erro al guardar los datos");
                }
             }
          
            });
            
        }
    
    })
});