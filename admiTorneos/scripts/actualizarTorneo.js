$(document).ready(function () {
    
    var nombre =$('#nombre');
    var modalidad=$('#modalidad');
    var sede=$('#sede');
    var fechaIni=$('#fechaIni');
    var fechaFin=$('#fechaFin');

$('#actualizar').click(function(){
    var datos = ('nombre='+nombre.val()+'&modalidad='+modalidad.val()+
                    '&sede='+sede.val()+'&fechaInicio='+fechaIni.val()+'&fechaFin='+fechaFin.val());
    alert(datos);
    return 0;
    $.ajax({
        type: 'get',
        url: '../php/actualizarTorneo.php',
        data: datos,
        success: function (respuesta) {
            if (respuesta==1) {
                alert('correcta');
                
                nombre.val('');
                modalidad.val('');
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