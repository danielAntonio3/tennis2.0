$(document).ready(function () {




    var selector = $('#selector');


    function logic() {
      $.ajax({
        type: "get",
        //cgecar la ruta
        url: "../actualizarPartidos/php/verPartidos.php",
        success: function(respuesta) {
          var js = JSON.parse(respuesta);
          var tamarreglo = js.length;
          //console.log(tamarreglo);


            var encuentro_id= js[0].encuentro_id;
            var jugador_id=js[0].jugador_id;
            var nombre=js[0].nombre;
            var apellidos=js[0].apellidos;
            var nombreoponente=js[1].nombre;
            var apellidosop=js[1].apellidos;


            var div = $('<div></div>').attr('id', encuentro_id).attr('class', 'card').attr('onclick', 'selecionado4(this)');
            var divColor = $('<div></div>').attr('class', 'label');
            var divContenido = $('<div></div>').attr('class', 'conte');
            var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
            var encabezadoT = $('<h4></h4>');
            var tipoLetra = $('<b></b>').text(nombre+" "+apellidos);
            var divDetalles = $('<div></div>').attr('class', 'details');
            var fechas = $('<h4></h4>').attr('id', 'fechaTorneo').text(nombreoponente+" "+apellidosop);
            var saltoLinea = $('<br>');


            selector.append(div);
            div.append(divColor);
            div.append(divContenido);
            divContenido.append(divTitulo);
            divTitulo.append(encabezadoT);
            encabezadoT.append(tipoLetra);
            divContenido.append(divDetalles);
            divDetalles.append(fechas);
            divDetalles.append(saltoLinea);



        }
      });
    }

    logic();


/*
        var selector=$('#selector');


        function logic() {
            $.ajax({
                type: "get",
                //cgecar la ruta
                url: "../actualizarPartidos/php/verPartidos.php",
                success: function (respuesta) {
                    var js = JSON.parse(respuesta);
                    console.log(js);
                    var tamarreglo=js.length;
                    //console.log(tamarreglo);



                    var encuentro_id= js[0].encuentro_id;
                    var jugador_id=js[0].jugador_id;
                    var nombre=js[0].nombre;
                    var apellidos=js[0].apellidos;
                    var nombreoponente=js[1].nombre;
                    var apellidosop=js[1].apellidos;



                    var div=$('<div></div>').attr('id',encuentro_id).attr('class','divs').attr('onclick','selecionado2(this)');
                    var divColor = $('<div></div>').attr('class', 'label');
                    var divContenido = $('<div></div>').attr('class', 'conte');
                    var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
                    var encabezadoT = $('<h4></h4>');
                    var tipoLetra = $('<b></b>').text("Roger Federer vs Rafael Nadal");
                    var divDetalles = $('<div></div>').attr('class', 'details');
                    var saltoLinea = $('<br>');


                    selector.append(div);
                    div.append(divColor);
                    div.append(divContenido);
                    divContenido.append(divTitulo);
                    divTitulo.append(encabezadoT);
                    encabezadoT.append(tipoLetra);
                    divContenido.append(divDetalles);
                    divDetalles.append(saltoLinea);



                }
            });
        }

        logic();
*/
});
