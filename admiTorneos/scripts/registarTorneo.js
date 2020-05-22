$(document).ready(function () {
    
var nombre =$('#nombre');
var modalidad=$('#modalidad');
var categoria=$('#categoria');
var numEquipos=$('#numEquipos');
var sede=$('#sede');
var fechaInicio=$('#fechaIni');
var fechaFin=$('#fechaFin');


    $('#registrar').click(function(){
        
        if(nombre.val()=="" || modalidad.val()=="" || categoria.val()=="" || numEquipos.val()=="" || sede.val()=="" || fechaInicio.val()=="" || fechaFin.val()==""){
            alert("todos los campos son obligatorios");
        }else{
        var datos = ('nombre='+nombre.val()+'&modalidad='+modalidad.val()+'&categoria='+categoria.val()+'&numEquipos='+numEquipos.val()+
                    '&sede='+sede.val()+'&fechaInicio='+fechaInicio.val()+'&fechaFin='+fechaFin.val());
        alert(datos);
        $.ajax({
            type: 'get',
            url: './php/crearTorneo.php',
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
    
      }  });
    
});