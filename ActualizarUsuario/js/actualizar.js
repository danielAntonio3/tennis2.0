$(document).ready(function() {

    var selector = $('#selector');
  
  
    function logic() {
      $.ajax({
        type: "get",
        //cgecar la ruta
        url: "../ActualizarUsuario/php/actualizarUsuario.php",
        success: function(respuesta) {
          var js = JSON.parse(respuesta);
          console.log(js);
          var tamarreglo = js.length;
          //console.log(tamarreglo);
  
          for (x = 0; x < tamarreglo; x++) {
            var id_user = js[x].id_user;
            var nombre = js[x].nombre;
            var apellidos = js[x].apellidos;
            var correo = js[x].correo;
            var tipo_user= js[x].tipo_user;
  
            
            if(tipo_user == 1)
            {
              var div = $('<div></div>').attr('id', id_user).attr('class', 'card').attr('onclick', 'selecionado5(this)');
              var divColor = $('<div></div>').attr('class', 'label');
              var divContenido = $('<div></div>').attr('class', 'conte');
              var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
              var encabezadoT = $('<h4></h4>');
              var tipoLetra = $('<b></b>').text("Administrador");
              var divDetalles = $('<div></div>').attr('class', 'details');
              var fechas = $('<span></span>').attr('id', 'fechaTorneo').text(nombre + " " +apellidos);
              var saltoLinea = $('<br><br>');
              var sedes = $('<span></span>').attr('id', 'sede').text(correo);
    
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

            if(tipo_user == 2)
            {
              var div = $('<div></div>').attr('id', id_user).attr('class', 'card').attr('onclick', 'selecionado5(this)');
              var divColor = $('<div></div>').attr('class', 'label');
              var divContenido = $('<div></div>').attr('class', 'conte');
              var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
              var encabezadoT = $('<h4></h4>');
              var tipoLetra = $('<b></b>').text("Monitor");
              var divDetalles = $('<div></div>').attr('class', 'details');
              var fechas = $('<span></span>').attr('id', 'fechaTorneo').text(nombre + " " +apellidos);
              var saltoLinea = $('<br><br>');
              var sedes = $('<span></span>').attr('id', 'sede').text(correo);
    
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
              if(tipo_user == 3)
            {
              var div = $('<div></div>').attr('id', id_user).attr('class', 'card').attr('onclick', 'selecionado5(this)');
              var divColor = $('<div></div>').attr('class', 'label');
              var divContenido = $('<div></div>').attr('class', 'conte');
              var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
              var encabezadoT = $('<h4></h4>');
              var tipoLetra = $('<b></b>').text("Federacion");
              var divDetalles = $('<div></div>').attr('class', 'details');
              var fechas = $('<span></span>').attr('id', 'fechaTorneo').text(nombre + " " +apellidos);
              var saltoLinea = $('<br><br>');
              var sedes = $('<span></span>').attr('id', 'sede').text(correo);
    
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

              if(tipo_user == 4)
            {
              var div = $('<div></div>').attr('id', id_user).attr('class', 'card').attr('onclick', 'selecionado5(this)');
              var divColor = $('<div></div>').attr('class', 'label');
              var divContenido = $('<div></div>').attr('class', 'conte');
              var divTitulo = $('<span></span>').attr('id', 'nombreTorneo');
              var encabezadoT = $('<h4></h4>');
              var tipoLetra = $('<b></b>').text("Jugador");
              var divDetalles = $('<div></div>').attr('class', 'details');
              var fechas = $('<span></span>').attr('id', 'fechaTorneo').text(nombre + " " +apellidos);
              var saltoLinea = $('<br><br>');
              var sedes = $('<span></span>').attr('id', 'sede').text(correo);
    
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
        }
      });
    }
  
    logic();
  
  });