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
                   


                }
            }
        });
    }


    cargaRankig();

});