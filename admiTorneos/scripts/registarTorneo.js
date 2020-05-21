$(document).ready(function () {
    
var nombre =$('#nombre');
var modalidad=$('#modalidad');
var categoria=$('#categoria');
var numEquipos=$('#numEquipos');
var sede=$('#sede');
var fechaIni=$('#fechaIni');
var fechaFin=$('#fechaFin');

$('#registrar').click(function(){
    var datos = ('nombre='+nombre.val()+'&modalidad='+modalidad.val()+
                '&categoria='+categoria.val()+'&Equipos='+numEquipos.val()+
                '&sede='+sede.val()+'&fechaInicio='+fechaIni.val()+'&fechaFin='+fechaFin.val());
    alert(datos);
    $.ajax({
        type: 'get',
        url: '../php/crearTorneo.php',
        data: datos,
        success: function (respuesta) {
            if (respuesta==1) {
                alert('correcta');
                
                nombre.val('');
                modalidad.val('');
                categoria.val('');
                numEquipos.val('');
                sede.val('');
                fechaIni.val('');
                fechaFin.val('');

            }else{
                alert('incorrecta');
            }
        }
    });

    });
});