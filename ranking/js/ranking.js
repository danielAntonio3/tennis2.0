$(document).ready(function () {
    
    var contenedor=$('#contenedor');


    function cargaRankig(){

        $.ajax({
            url: "../ranking/php/cargaRanking.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                console.log(js);
                var tamarreglo = js.length;
                //console.log(tamarreglo);
                for (x = 0; x < tamarreglo; x++) {
                  var nom = js[x].nombre;
                  var aplli= js[x].apellido;
                  var ranki = js[x].ranking_atp;
                  var fot = js[x].foto;
                  var pais = js[x].modalidad_torneo;


                }
            }
        });
    }


    cargaRankig();

});