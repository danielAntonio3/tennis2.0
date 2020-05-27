$(document).ready(function () {
    
        var tbody=$('#body');

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

                    var row=$('<tr></tr>').attr('value',id_torneo);
                    var tdfecha=$('<td>/td>').text(fecha_inicio+'-'+fecha_fin);
                    var tdnombre=$('<td>/td>').text(nombre_torneo);
                    var tdmodalida=$('<td>/td>').text(modalidad_torneo);
                    var tdsede=$('<td>/td>').text(sede);
                    
    var tdbotonEditar=$('<button>b</<button>').val(id_torneo).attr('id',id_torneo).text('hola');                        
                        tbody.append(row);
                        row.append(tdfecha);
                        row.append(tdnombre);
                        row.append(tdmodalida);
                        row.append(tdsede);
                        row.append(tdbotonEditar);

                    }
                }
            });
        }

        logic();
        //.attr('onchange',selecionado1(this))
        
        function selecionado(e){

            console.log(e.id);
            
        //var ids=e.id;
        //var formulario=document.getElementById(ids);
        //formulario.submit();

        };
    

});