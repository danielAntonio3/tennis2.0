$(document).ready(function () {
    
var nombre =$('#nombre');
var modalidad=$('#modalidad');
var categoria=$('#categoria');
var numEquipos=$('#numEquipos');
var sede=$('#sede');
var fechaInicio=$('#fechaIni');
var fechaFin=$('#fechaFin');


    $('#registrar').click(function(event){
        event.preventDefault();
        if(nombre.val()=="" || modalidad.val()=="" || categoria.val()=="" || numEquipos.val()=="" || sede.val()=="" || fechaInicio.val()=="" || fechaFin.val()==""){
            alert("todos los campos son obligatorios");
        
        }else{

        var datos = ('nombre='+nombre.val()+'&modalidad='+modalidad.val()+'&categoria='+categoria.val()+'&numEquipos='+numEquipos.val()+
                    '&sede='+sede.val()+'&fechaInicio='+fechaInicio.val()+'&fechaFin='+fechaFin.val());
        $.ajax({
            type: 'get',
            url: '../admiTorneos/php/crearTorneo.php',
            data: datos,
            success: function (respuesta) {
                if (respuesta==1) {
                    alert("los datos se gusardaron con exitos")
                    console.log("los dato se gusardaron con exito");
                    //alert('correcta');
                    nombre.val('');
                    modalidad.val('');
                    categoria.val('');
                    numEquipos.val('');
                    sede.val('');
                    fechaIni.val('');
                    fechaFin.val('');

                }else{
                    alert("Error al guardar los datos");
                    console.log("erro al guardar los datos");
                    
                    //alert('incorrecta');
                }
            }
        });
    
      }  });
    
});