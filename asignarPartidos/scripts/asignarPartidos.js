$(document).ready(function(){

  var jugador1=$('#jugador1');
  var jugador2=$('#jugador2');
  var tpartido=$('#tpartido');
  var cancha=$('#cancha');
  var monitor=$('#monitor');
  var fechaPartido=$('#fechaPartido');
  var idtorneo=0;
  var arregloMonitores;
  var arregloJugadores;
  var idjugador1=0;
  var idjugador2=0;
  function regresoDatos(){

    $.ajax({
        url: "../asignarPartidos/php/obtenerDatos.php",
        success: function (respuesta) {
          var js = JSON.parse(respuesta);
          console.log(js);
          var tamarreglo = js.length;
          arregloJugadores=js;
          idtorneo=js[0].torneo_id;
          for (x = 0; x < tamarreglo; x++) {

            var nombrejugador=js[x].nombre+" "+js[x].apellidos;

            var opcion=$('<option></option>').attr('value',nombrejugador).text(nombrejugador);
            var opcion2=$('<option></option>').attr('value',nombrejugador).text(nombrejugador);
            jugador1.append(opcion);
            jugador2.append(opcion2);


          }



      }

    });






  }

regresoDatos();



function devolverMonitor() {
  $.ajax({
      url: "../asignarPartidos/php/devolverMonitor.php",
      success: function (respuesta) {
        var js = JSON.parse(respuesta);
        arregloMonitores=js;
        var tamarreglo = js.length;


        for (x = 0; x < tamarreglo; x++) {

          var nombremonitor=js[x].nombre+" "+js[x].apellidos;

          var opcion=$('<option></option>').attr('value',nombremonitor).text(nombremonitor);
          monitor.append(opcion);


        }

    }

  });
}

devolverMonitor();

  jugador1.change(function(e){
    e.preventDefault();
    var actual=$('#jugador1 option:selected').text();
    var datos=('jugador='+actual);

    for (var i = 0; i < arregloJugadores.length; i++) {
      if((arregloJugadores[i].nombre+" "+arregloJugadores[i].apellidos)==actual){
          idjugador1=arregloJugadores[i].id_jugador;
          break;
      }
    }


    $.ajax({
      type:'get',
      url:'../asignarPartidos/php/cargarJugadores.php',
      data:datos,
      success: function(respuesta){
      $('#ij1').attr('src','../imagenes/federer.jpg');

      console.log(respuesta);
      }
    });

  });

  jugador2.change(function(e){

    var actual=$('#jugador2 option:selected').text();
    var datos=('jugador='+actual);
    console.log(arregloJugadores);

    for (var i = 0; i < arregloJugadores.length; i++) {
      if((arregloJugadores[i].nombre+" "+arregloJugadores[i].apellidos)==actual){
          idjugador2=arregloJugadores[i].id_jugador;
          break;
      }
    }

    $.ajax({
      type:'get',
      url:'../asignarPartidos/php/cargarJugadores.php',
      data:datos,
      success: function(respuesta){
      $('#ij2').attr('src','../imagenes/nadal.jpg');

      console.log(respuesta);
      }
    });

  });

$('#regPartido').click(function(event) {
  var idMonitor=0;
  for (var i = 0; i < arregloMonitores.length; i++) {

        if(monitor.val()==(arregloMonitores[i].nombre+" "+arregloMonitores[i].apellidos)){
          idMonitor=arregloMonitores[i].id_monitor;
          break;
        }
  }
  event.preventDefault();
  console.log(idMonitor);
  var datos = ('fechaPartido='+fechaPartido.val()+ '&tpartido='+tpartido.val()+ '&cancha='
  +cancha.val()+ '&monitor='+idMonitor+'&torneo_idtorneo='+idtorneo+'&idjugador1='+idjugador1+'&idjugador2='+idjugador2);
  alert(datos);
  $.ajax({
    type: 'get',
    url: '../asignarPartidos/php/asignarPartidos.php',
    data: datos,
    success: function (respuesta) {
      //alert('Partido agendado');
      fechaPartido.val();
      tpartido.val();
      cancha.val();
      monitor.val();

      $.ajax({
        type:'get',
        url:'../asignarPartidos/php/insertarEncuentro.php',
        data:datos,
        success: function(res){

        }
      });

    }
  });



});


});
