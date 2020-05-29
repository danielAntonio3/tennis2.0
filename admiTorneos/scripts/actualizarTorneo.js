$(document).ready(function () {

    var nombre =$('#nombre');
    var modalidad=$('#modalidad');
    var sede=$('#sede');
    var fechaIni=$('#fechaIni');
    var fechaFin=$('#fechaFin');
    var actualizar=$('#actualizar');

    alert("si funciona");

    function regresoDatos(){

        $.ajax({
            url: "../admiTorneos/php/regresarDatos.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                    //console.log(js);
                    var id_torneo= js[0].id_torneo;
                    var nombre_torneo=js[0].nombre_torneo;
                    var fecha_inicio=js[0].fecha_inicio;
                    var fecha_fin=js[0].fecha_fin;
                    var modalidad_torneo=js[0].modalidad_torneo;
                    var sedes =js[0].sede;

                    //console.log(modalidad.val());

                    if(modalidad.val()==null){
                    modalidad.val(modalidad_torneo);
                    }

                    nombre.val(nombre_torneo);
                    sede.val(sedes);
                    fechaIni.val(fecha_inicio);
                    fechaFin.val(fecha_fin);

            }
        });
    }

    regresoDatos();



        actualizar.click(function(e){
            e.preventDefault();
                var datos = ('nombre='+nombre.val()+'&modalidad='+modalidad.val()+
                    '&sede='+sede.val()+'&fechaInicio='+fechaIni.val()+'&fechaFin='+fechaFin.val());
            alert(datos);
        $.ajax({
            type: 'get',
            url: '../admiTorneos/php/actualizarTorneo.php',
            data: datos,
            success: function (respuesta) {
                if (respuesta==1) {
                    alert('Actualiacion correcta');
                }else{
                    alert('Hubo un problema al actualizar los datos intente nuevamente');
                }
            }
        });

    });
});
