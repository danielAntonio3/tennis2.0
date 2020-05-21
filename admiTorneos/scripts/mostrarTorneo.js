$(document).ready(function () {
    
        var tbody=$('#body');

        function logic() {
            $.ajax({
                type: "get",
                url: "./php/mostrarTorneos.php",
                success: function (respuesta) {
                    var js = JSON.parse(respuesta);
                    console.log(js);
                    var tamarreglo=js.length;
                    console.log(tamarreglo);
                    
                    for (x=0; x<tamarreglo; x++){ 
                    var id_torneo= js[x].id_torneo;
                    var nombre_torneo=js[x].nombre_torneo;
                    var fecha_inicio=js[x].fecha_inicio;
                    var fecha_fin=js[x].fecha_fin;
                    var modalidad_torneo=js[x].modalidad_torneo;
                    var sede =js[x].sede;

                    var row=$('<tr></tr>');
                    var tdfecha=$('<td>/td>').text(fecha_inicio+'-'+fecha_fin);
                    var tdnombre=$('<td>/td>').text(nombre_torneo);
                    var tdmodalida=$('<td>/td>').text(modalidad_torneo);
                    var tdsede=$('<td>/td>').text(sede);
                    var td=$('<td></td>');
                    var tdbotonEditar=$('<input></<input>').val('editar').attr('type','button').attr('id',id_torneo);

                        td.append(tdbotonEditar);
                        tbody.append(row);
                        row.append(tdfecha);
                        row.append(tdnombre);
                        row.append(tdmodalida);
                        row.append(tdsede);
                        row.append(td);
                    }
                }
            });
        }

        logic();

        


});