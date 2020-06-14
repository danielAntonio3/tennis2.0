$(document).ready(function () {
    
    var nombre=$('#nombre');
    var apellidos=$('#apellidos');
    var correo=$('#correo');
    var contrasena=$('#contrasena');
    var actualizar=$('#actualizar');

    var id;
    function cargaUser(){


        $.ajax({
            url: "../ActualizarUsuario/php/cargarDatos.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                console.log(js);
                    var nombreR = js[0].nombre;
                    var apellidosR = js[0].apellidos;
                    var correoR = js[0].correo;
                    var contrasenaR=js[0].contrasena;
                    id=js[0].id_user;
                    nombre.val(nombreR);
                    apellidos.val(apellidosR);
                    correo.val(correoR);
                    contrasena.val(contrasenaR);

    
            }
        });

    }

    cargaUser();

    actualizar.click(function (e) { 
        e.preventDefault();
        if(nombre.val()==" " || apellidos.val() ==" " || correo.val()==" " || contrasena.val()== " "){
            alert("Todos los campos son obligatorios");
        }else{
            var datos = ('nombre='+nombre.val()+'&apellido='+apellidos.val()+
                    '&contrasena='+contrasena.val()+'&id='+id);
        $.ajax({
            type: "get",
            url: "../ActualizarUsuario/php/actualizarDatos.php",
            data: datos,
            success: function (respuesta) {
                if(respuesta == 1){
                    alert("Actualizacion correctamente");
                }else{
                    alert("Error intente nuevamente");
                }
                
            }
        });
    }

    });




});
