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
    var arregloNombre=actual.split(" ");
    var datos=('jugador='+actual+"&nombre="+arregloNombre[0]+"&apellidos="+arregloNombre[1]);
    var apellidoJ1=arregloNombre[1].toLowerCase();

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
      $('#ij1').attr('src',"../imagenes/"+apellidoJ1+".jpg");


      }
    });

  });

  jugador2.change(function(e){

    var actual=$('#jugador2 option:selected').text();
    var arregloNombre=actual.split(" ");
    var datos=('jugador='+actual+"&nombre="+arregloNombre[0]+"&apellidos="+arregloNombre[1]);
    var apellidoJ2=arregloNombre[1].toLowerCase();


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
      $('#ij2').attr('src',"../imagenes/"+apellidoJ2+".jpg");

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
  //alert(datos);
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
/*
          var divmodal=$('<div></div>').attr('class', 'modal fade').attr('tabindex',
           '-1').attr('role', 'dialog').attr('aria-labelledby',
           'exampleModalLabel').attr('aria-hidden', 'true');
          var divdialog=$('<div></div>').attr('class', 'modal-dialog').attr('role', 'document');
          var divcontent=$('<div></div>').attr('class', 'modal-content');
          var divheader=$('<div></div>').attr('class', 'modal-header');
          var h5=$('<h5></h5>').attr('class', 'modal-title').text('Partido Agendado');
          var botonx=$('<button></button>').attr('class', 'close').attr('data-dismiss', 'modal').attr('aria-label', 'Close');
          var span=$('<span></span>').attr('aria-hidden', 'true').text('&times;');
          var modalbody=$('<div></div>').attr('class', 'modal-body');
          var modalfooter=$('<div></div>').attr('class', 'modal-footer');
          var botoncerrar=$('<button></button>').attr('type', 'button').attr('class',
          'btn btn-primary').attr('data-dismiss', 'modal').text('Aceptar');
          var texto=$('<p></p>').text('El partido ha sido agendado correctamente');

          divmodal.append(divdialog);
          divdialog.append(divcontent);
          divcontent.append(divheader);
          divheader.append(h5);
          divheader.append(botonx);
          botonx.append(span);
          divcontent.append(modalbody);
          modalbody.append(texto);
          divcontent.append(modalfooter);
          modalfooter.append(botoncerrar);
          $('#content').append(divmodal);
*/

            $('#modalpartidos').modal('show');






        }
      });



    }
  });



});



});

function recargarPag() {
  window.location.replace('../perfiles/perfil.html');
}
