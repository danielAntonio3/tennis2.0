$(document).ready(function() {



    $.ajax({
      type:'get',
      url:'../historial/php/historial.php',
      success: function(respuesta){
        var js= JSON.parse(respuesta);

        var tamarreglo=js.length;
        var principal=$('#principal');
        for (var x = 0; x < tamarreglo; x++) {


          var contenedor=$('<div></div>').attr('class', 'contenedor');
          var nombreTorneo=$('<div></div>').attr('class', 'nomTorneo');
          var spanfecha=$('<span></span>').text(js[x].fecha);

          var divhistorial=$('<div></div>').attr('class', 'historial');
          var jug1=$('<div></div>').attr('class', 'jug1');
          var spannom1=$('<span></span>').attr('class', 'nombre').text(js[x].nombreJugador);
          var br=$('<br/>');
          var marcador1=$('<span></span>').attr('class', 'marcador').text(js[x].setsJugador);
          var divvs=$('<div></div>').attr('class', 'vs');
          var spanvs=$('<span></span>').text('VS');
          var jug2=$('<div></div>').attr('class', 'jug2');
          var br2=$('<br/>');
          var spannom2=$('<span></span>').attr('class', 'nombre').text(js[x].nombreOponente);
          var marcador2=$('<span></span>').attr('class', 'marcador').text(js[x].setsOponente);
          principal.append(contenedor);
          contenedor.append(nombreTorneo);
          nombreTorneo.append(spanfecha);
          contenedor.append(divhistorial);
          divhistorial.append(jug1);
          jug1.append(spannom1);
          jug1.append(br);
          jug1.append(marcador1);
          divhistorial.append(divvs);
          divvs.append(spanvs);
          divhistorial.append(jug2);
          jug2.append(spannom2);
          jug2.append(br2);
          jug2.append(marcador2);



        }




      }

    });











});
