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
                    var divColor = $('<div></div>').attr('class', 'label');
                    var divContenido = $('<div></div>').attr('class', 'conte');
                    var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
                    var encabezadoT = $('<h4></h4>');
                    var tipoLetra = $('<b></b>').text('');
                    var divDetalles = $('<div></div>').attr('class', 'details');
                    var fechas = $('<span></span>').attr('id', 'fechaTorneo').text('' + "  " + '');
                    var saltoLinea = $('<br>');
                    var sedes = $('<span></span>').attr('id', 'sede').text('');

                    selector.append(div);
                    div.append(divColor);
                    div.append(divContenido);
                    divContenido.append(divTitulo);
                    divTitulo.append(encabezadoT);
                    encabezadoT.append(tipoLetra);
                    divContenido.append(divDetalles);
                    divDetalles.append(fechas);
                    divDetalles.append(saltoLinea);
                    divDetalles.append(sedes);

                    }
                }
            });
        }

        logic();

});
