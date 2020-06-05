$(document).ready(function() {

  var contenedor = $('#contenedor');


  function cargaRankig() {

    $.ajax({
      url: "../ranking/php/cargaRanking.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        //console.log(tamarreglo);
        for (x = 0; x < tamarreglo; x++) {
          var apellido = js[x].apellidos;
          var imagen = js[x].foto;
          var nombre = js[x].nombre;
          var pais = js[x].pais;
          var posicion = js[x].ranking_atp;

          var tarjeta = $('<div></div>').attr('class', 'card mb-3 size');
          var filaTarjeta = $('<div></div>').attr('class', 'row no-gutters');
          var colImagen = $('<div></div>').attr('class', 'col-4');
          var imagenTarjeta = $('<img>').attr('src','../imagenes/'+ imagen).attr('width','230px').attr('height','230px');
          var colCont = $('<div></div>').attr('class', 'col-8');
          var divTitulo = $('<div></div>').attr('class', 'card-header topCard').attr('id', 'nombre')
          var nombrePlayer = $('<span></span>').text(nombre + " " + apellido);
          var rankPlayer = $('<span></span>').attr('style', 'float:right').text("#" + posicion);
          var divBody = $('<div></div>').attr('class', 'card-body');
          var texto = $('<p></p>').attr('class', 'card-text').text("Nacionalidad: " + pais);

          contenedor.append(tarjeta);
          tarjeta.append(filaTarjeta);
          filaTarjeta.append(colImagen);
          filaTarjeta.append(colCont);
          colImagen.append(imagenTarjeta);
          colCont.append(divTitulo);
          divTitulo.append(nombrePlayer);
          divTitulo.append(rankPlayer);
          colCont.append(divBody);
          divBody.append(texto);
        }
      }
    });
  }

  cargaRankig();

  function hayUsuario() {
    $.ajax({
      url: "../principal/php/hayUsuario.php",
      success: function(respuesta) {
        if (respuesta == 1) {
          $('#cerrarSesion').show();
          $('#inicioSesion').hide();
          $('#perfil').show();
        } else {
          $('#cerrarSesion').hide();
          $('#inicioSesion').show();
          $('#perfil').hide();
        }

      }
    });
  }

  hayUsuario();

  $('#cerrarSesion').click(function(e) {
    e.preventDefault();
    $.ajax({
      url: "../principal/php/cerrarSesion.php",
      success: function(respuesta) {
        if (respuesta == 1) {
          $('#cerrarSesion').hide();
          $('#inicioSesion').show();
          $('#perfil').hide();
        } else {
          $('#cerrarSesion').hide();
          $('#inicioSesion').show();
          $('#perfil').hide();
        }

      }
    });
  });

  $('#perfil').click(function(e) {
    e.preventDefault();
    window.location.replace('../perfiles/perfil.html');

  });

});