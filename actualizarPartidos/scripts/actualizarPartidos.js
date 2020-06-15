$(document).ready(function () {
  var punto1=parseInt($('#puntaje1').text());

  var punto2=parseInt($('#puntaje2').text());
  var numset1=parseInt($('#numset1').text());
  var numset2=parseInt($('#numset2').text());
  var inicio=0;
	var timeout=0;
  var tipoencuentro="";
  var numset=1;
  var idencuentro=0;
  var puntosj1=0;
  var puntosj2=0;
  var cuentaset1=0;
  var cuentaset2=0;
  function regresoDatos(){

    $.ajax({
        url: "../actualizarPartidos/php/guardarDatos.php",
        success: function (respuesta) {
          var js = JSON.parse(respuesta);

          idencuentro=js[0].encuentro_id;
          tipoencuentro=js[0].tipo_encuentro;

            var nombrejugador=js[0].nombre+" "+js[0].apellidos;
            var jugadoroponente=js[1].nombre+" "+js[1].apellidos;

            $('#j1').text(nombrejugador);
            $('#j2').text(jugadoroponente);
            var apellidoJ1=js[0].apellidos.toLowerCase();
            var apellidoJ2=js[1].apellidos.toLowerCase();
            $('#ij1').attr('src',"../imagenes/"+apellidoJ1+".jpg");
            $('#ij2').attr('src',"../imagenes/"+apellidoJ2+".jpg");


      }

    });

  }

regresoDatos();





$('#btncronometro').click(function(event) {

  if(timeout==0)
		{


			$('#btncronometro').text('Detener');


			inicio=vuelta=new Date().getTime();


			funcionando();
		}else{


			$('#btncronometro').text('Reanudar');
			clearTimeout(timeout);
			timeout=0;
		}
});

function funcionando()
	{

		var actual = new Date().getTime();


		var diff=new Date(actual-inicio);


		var result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());
		$('#crono').text(result);


		timeout=setTimeout(function() {
        funcionando();
    },1000);
	}

function LeadingZero(Time) {
		return (Time < 10) ? "0" + Time : + Time;
	}




$('#Punto1').click(function(event){

  if (punto1==30) {
    punto1 = punto1 + 10;
  }
  else if ((punto1==40 && punto2<40) || (punto1=='Adv' && punto2==40)) {
    punto1=0;
    punto2=0;
    numset1+= 1;
    puntosj1++;
    $('#numset1').text(numset1);
  }
  else if (punto1==40 && punto2==40) {
    punto1='Adv';

  }
  else if (punto2=='Adv') {
    punto2=parseInt('40');
  }
  else{
    punto1 = punto1 + 15;

  }
  $('#puntaje1').text(punto1);
  $('#puntaje2').text(punto2);

  console.log(tipoencuentro);

  if (tipoencuentro=="Desempate") {

    if (((puntosj1>puntosj2)) && (puntosj1>=6)){
      datos=('numset='+numset+"&tiempo_juego="+$('#crono').text()+"&encuentro_id="+idencuentro+
      "&ganador="+$('#j1').text()+"&puntos_ganador="+puntosj1+"&puntos_perdedor="+puntosj2);

      $.ajax({
        type:'get',
        url: "../actualizarPartidos/php/actualizarSet.php",
        data: datos,
        success: function (respuesta) {
            numset++;
            cuentaset1++;
            $('#numset1').text('0');
            $('#numset2').text('0');
            if (cuentaset1==2) {

            var datosjuego=('idencuentro='+idencuentro+'&ganador='+$('#j1').text());

                $.ajax({
                  type:'get',
                  url:"../actualizarPartidos/php/actualizarGanador.php",
                  data:datosjuego,
                  success:function(res){

                  }



                });

            }

      }

      });

    }
  }
  else if (tipoencuentro=="Ventajas") {
    if (((puntosj1-puntosj2)>=2) && (puntosj1>=6)) {

      datos=('numset='+numset+"&tiempo_juego="+$('#crono').text()+"&encuentro_id="+idencuentro+
      "&ganador="+$('#j1').text()+"&puntos_ganador="+puntosj1+"&puntos_perdedor="+puntosj2);

      $.ajax({
        type:'get',
        url: "../actualizarPartidos/php/actualizarSet.php",
        data: datos,
        success: function (respuesta) {
            numset++;
            cuentaset1++;
            $('#numset1').text('0');
            $('#numset2').text('0');
            if (cuentaset1==2) {

            var datosjuego=('idencuentro='+idencuentro+'&ganador='+$('#j1').text());

                $.ajax({
                  type:'get',
                  url:"../actualizarPartidos/php/actualizarGanador.php",
                  data:datosjuego,
                  success:function(res){

                  }



                });

            }

      }

      });

    }

  }





});
$('#Punto2').click(function(event){

  if (punto2==30) {
    punto2 = punto2 + 10;
  }
  else if ((punto2==40 && punto1<40) || (punto2=='Adv' && punto1==40)) {
    punto1=0;
    punto2=0;
    numset2+= 1;
    puntosj2++;

    $('#numset2').text(numset2);
  }
  else if (punto1==40 && punto2==40) {
    punto2='Adv';

  }
  else if (punto1=='Adv') {
    punto1=parseInt('40');
  }
  else{
    punto2 = punto2 + 15;

  }
$('#puntaje1').text(punto1);
$('#puntaje2').text(punto2);

        if (tipoencuentro=="Desempate") {
          if (((puntosj2>puntosj1)) && (puntosj2>=6)){
            datos=('numset='+numset+"&tiempo_juego="+$('#crono').text()+"&encuentro_id="+idencuentro+
            "&ganador="+$('#j2').text()+"&puntos_ganador="+puntosj2+"&puntos_perdedor="+puntosj1);

            $.ajax({
              type:'get',
              url: "../actualizarPartidos/php/actualizarSet.php",
              data: datos,
              success: function (respuesta) {
                numset++;

                cuentaset2++;
                $('#numset1').text('0');
                $('#numset2').text('0');
                if (cuentaset2==2) {

                var datosjuego=('idencuentro='+idencuentro+'&ganador='+$('#j2').text());

                    $.ajax({
                      type:'get',
                      url:"../actualizarPartidos/php/actualizarGanador.php",
                      data:datosjuego,
                      success:function(res){

                      }



                    });

                }

            }

            });

          }





        }
        else if (tipoencuentro=="Ventajas") {

          if (((puntosj2-puntosj1)>=2) && (puntosj2>=6)) {

            datos=('numset='+numset+"&tiempo_juego="+$('#crono').text()+"&encuentro_id="+idencuentro+
            "&ganador="+$('#j2').text()+"&puntos_ganador="+puntosj2+"&puntos_perdedor="+puntosj1);

            $.ajax({
              type:'get',
              url: "../actualizarPartidos/php/actualizarSet.php",
              data: datos,
              success: function (respuesta) {
                numset++;

                cuentaset2++;
                $('#numset1').text('0');
                $('#numset2').text('0');
                if (cuentaset2==2) {

                var datosjuego=('idencuentro='+idencuentro+'&ganador='+$('#j2').text());

                    $.ajax({
                      type:'get',
                      url:"../actualizarPartidos/php/actualizarGanador.php",
                      data:datosjuego,
                      success:function(res){

                      }



                    });

                }


            }

            });

          }



        }



      });
});
