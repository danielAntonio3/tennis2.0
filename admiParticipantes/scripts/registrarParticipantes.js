$(document).ready(function(){

  var federacion=$('#federacion');
  var licencia=$('#licencia');
  var velocidad=$('#velocidad');
  var puntos=$('#puntos');
  var fuerza=$('#fuerza');
  var encuentros=$('#encuentros');
  var ranking=$('#ranking');
  var usuario=$('#usuario');
  var torneo=$('#torneo');

alert('Si funciona');
          function obtenerDatos() {

            $.ajax({
                url: "../admiParticipantes/php/getDatos.php",
                success: function (respuesta) {
                    var js = JSON.parse(respuesta);
                        //console.log(js);
                        var id_torneo= js[0].id_torneo;
                        var nombre_torneo=js[0].nombre_torneo;


                        //console.log(modalidad.val());

                        if(modalidad.val()==null){
                        modalidad.val(modalidad_torneo);
                        }

                        torneo.val(id_torneo);
                        console.log('El id del torneo es '+id_torneo);

                }
            });


          }

obtenerDatos();




        $('#registrar').click(function(event){
          event.preventDefault();
          if (federacion.val()=='' || licencia.val()=='' || velocidad.val()=='' || puntos.val()=='' || fuerza.val()=='' || encuentros.val()=='' ||
          ranking.val()=='' || usuario.val()=='' || torneo.val()=='') {
            alert('Debes llenar todos los campos');
          }
          else{
            var datos = ('federacion='+federacion.val()+ '&licencia='+licencia.val()+ '&velocidad='+velocidad.val()+ '&puntos='+puntos.val()+'&fuerza='+fuerza.val()+'&encuentros='+encuentros.val()+
                        '&ranking='+ranking.val()+'&usuario='+usuario.val()+'&torneo='+torneo.val());
                alert(datos);

                $.ajax({
                    type: 'get',
                    url: './php/registrarParticipantes.php',
                    data: datos,
                    success: function (respuesta) {
                        if (respuesta==1) {
                            alert('correcta');


                            federacion.val();
                            licencia.val();
                            velocidad.val();
                            puntos.val();
                            fuerza.val();
                            encuentros.val();
                            ranking.val();
                            usuario.val();
                            torneo.val();

                        }else{
                          console.log('El valor es '+respuesta);
                            alert('incorrecta');

                        }
                    }
                });

          }
        });





})
