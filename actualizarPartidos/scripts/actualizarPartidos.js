$(document).ready(function () {
  var punto1=parseInt($('#puntaje1').text());

  var punto2=parseInt($('#puntaje2').text());
  var numset1=parseInt($('#numset1').text());
  var numset2=parseInt($('#numset2').text());
  var inicio=0;
	var timeout=0;

  function regresoDatos(){

    $.ajax({
        url: "../actualizarPartidos/php/guardarDatos.php",
        success: function (respuesta) {
          var js = JSON.parse(respuesta);




            var nombrejugador=js[0].nombre+" "+js[0].apellidos;
            var jugadoroponente=js[1].nombre+" "+js[1].apellidos;

            $('#j1').text(nombrejugador);
            $('#j2').text(jugadoroponente);


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




});
$('#Punto2').click(function(event){

  if (punto2==30) {
    punto2 = punto2 + 10;
  }
  else if ((punto2==40 && punto1<40) || (punto2=='Adv' && punto1==40)) {
    punto1=0;
    punto2=0;
    numset2+= 1;
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


      });
});
