$(document).ready(function () {

        var selector=$('#selector');
        

        function logic() {
            $.ajax({
                type: "get",
                //cgecar la ruta
                url: "../admiTorneos/php/mostrarTorneos.php",
                success: function (respuesta) {
                    var js = JSON.parse(respuesta);
                    console.log(js);
                    var tamarreglo=js.length;
                    //console.log(tamarreglo);
                    
                    for (x=0; x<tamarreglo; x++){ 
                    var id_torneo= js[x].id_torneo;
                    var nombre_torneo=js[x].nombre_torneo;
                    var fecha_inicio=js[x].fecha_inicio;
                    var fecha_fin=js[x].fecha_fin;
                    var modalidad_torneo=js[x].modalidad_torneo;
                    var sede =js[x].sede;

                    
                    var div=$('<div></div>').attr('id',id_torneo).attr('class','divs').text("dame un click").attr('onclick','selecionado(this)');
                    var Titulo=$('<span></span>').text(nombre_torneo);
                    var fechas=$('<span></span>').text(fecha_inicio);
                    var sedes=$('<span></span>').text(sede);

                    selector.append(div);
                    div.append(Titulo);
                    
                    
                    }
                }
            });
        }

        logic();
        
});