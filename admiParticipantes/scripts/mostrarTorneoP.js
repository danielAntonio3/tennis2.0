$(document).ready(function () {

        var selector=$('#selector');


        function logic() {
            $.ajax({
                type: "get",
                //cgecar la ruta
                url: "../admiParticipantes/php/mostrarTorneosP.php",
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


                    var div=$('<div></div>').attr('id',id_torneo).attr('class','divs').attr('onclick','selecionado2(this)');
                    var Titulo=$('<span></span>').text('Nombre: '+nombre_torneo);
                    var fechas=$('<span></span>').text('Fecha inicio: '+fecha_inicio+"--"+'Fecha Final: '+fecha_fin);
                    var sedes=$('<span></span>').text('Sede: '+sede);

                    selector.append(div);
                    div.append(Titulo);
                    div.append(fechas);
                    div.append(sedes);

                    }
                }
            });
        }

        logic();

});
