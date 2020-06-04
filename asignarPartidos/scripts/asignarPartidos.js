$(document).ready(function(){

  var jugador1=$('#jugador1');
  var jugador2=$('#jugador2');

  function regresoDatos(){

    $.ajax({
        url: "../asignarPartidos/php/obtenerDatos.php",
        success: function (respuesta) {
          var js = JSON.parse(respuesta);

          var tamarreglo = js.length;
          console.log(js);

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





  jugador1.change(function(e){
    e.preventDefault();
    var actual=$('#jugador1 option:selected').text();
    var datos=('jugador='+actual);

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
    e.preventDefault();
    var actual=$('#jugador2 option:selected').text();
    var datos=('jugador='+actual);

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




});
