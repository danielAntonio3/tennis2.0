$(document).ready(function () {
    
    var nombre=$('#nombre');
    var apellido=$('#apellidos');
    var tipUsuario=$('#tipo');
    var correo=$('#correo');
    var password=$('#contrasena');
    var pregunta=$('#pregunta');
    var respuesta=$('#respuesta');
    

    $('#botonRegistrar').click(function(event){
        event.preventDefault();
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
                        console.log("los dato se gusardaron con exito");
                        nombre.val('');
                        apellido.val('');
                        tipUsuario.val('');
                        correo.val('');
                        password.val('');
                        pregunta.val('');
                        respuesta.val('');
                }else{
                    console.log("erro al guardar los datos");
                }
             }
          
            });
            
        }
    
    })
});