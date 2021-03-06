$(document).ready(function() {

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



  $('#carouselExampleCaptions').carousel({
    interval: 2000,
  })


  $("#atras").click(function() {
    $('#carouselExampleCaptions').carousel("prev");
  });


  $("#next").click(function() {
    $('#carouselExampleCaptions').carousel("next");

  });


  var selector = $('#selector');


  function logic() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../admiTorneos/php/mostrarTorneos.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        //console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          var id_torneo = js[x].id_torneo;
          var nombre_torneo = js[x].nombre_torneo;
          var fecha_inicio = js[x].fecha_inicio;
          var fecha_fin = js[x].fecha_fin;
          var modalidad_torneo = js[x].modalidad_torneo;
          var sede = js[x].sede;


          var div = $('<div></div>').attr('id', id_torneo).attr('class', 'card').attr('onclick', 'myFunction()');
          var divColor = $('<div></div>').attr('class', 'label');
          var divContenido = $('<div></div>').attr('class', 'conte');
          var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
          var encabezadoT = $('<h4></h4>');
          var tipoLetra = $('<b></b>').text(nombre_torneo);
          var divDetalles = $('<div></div>').attr('class', 'details');
          var fechas = $('<span></span>').attr('id', 'fechaTorneo').text(fecha_inicio + " - " + fecha_fin);
          var saltoLinea = $('<br>');
          var sedes = $('<span></span>').attr('id', 'sede').text(sede);

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


  //para mostar todos los torneos que hay registrados
    var contenedor=$('#recargar');

      function cargarTorneos(){
        //var espera = 200;
        $.ajax({
          url: "../principal/mostarTorneos.html",
          success: function(datos) {
            setTimeout(function() {
              contenedor.html(datos);
            },200);
          }
        });

      }

      cargarTorneos();

});