$(document).ready(function() {

  var registrarUser = $('#registrarUser');
  var contenedor = $('#recargar');

  //datos de los perfiles
  var nombreUser=$('#nombreUser');
  var tipo=$('#tipo');
  //BOTONES DE LA BARRA DE NAVEGACION
  var verTorneo=$('#verTorneo');
  var crearTorneo=$('#crearTorneo');
  var registrarUser=$('#registrarUser');
  var registrarJugadores=$('#registrarParticipantes');
  var actuPartido=$('#actuPartido');
  var menuPrincipal=$('#menuPrincipal');
  var agendarPartidos=$('#agendarPartidos');
  var histoPartido=$('#histoPartido');

//funcion jala los datos de usuario
    function nombre(){
      $.ajax({
        url: "./php/nombreUser.php",
        success: function (respuesta) {
          var js = JSON.parse(respuesta);
          console.log(js);
          var nombre= js[0].nombre;
          var apellidos=js[0].apellidos;
          nombreUser.text(nombre+" "+apellidos);
        }
      });
    }

    nombre();

    //para poner la el rol de el usuario logiado
    function oculto(){
      //alert("hola");
      $.ajax({
        url: "./php/perfil.php",
        success: function (respuesta) {
          if(respuesta==1){
            //eres administrador
            tipo.text("Administrador");
            actuPartido.hide(); verTorneo.show(); crearTorneo.show(); registrarUser.show();
            registrarJugadores.hide();
          }if(respuesta==2){
            //eres monitor
            tipo.text("Monitor"); actuPartido.show(); verTorneo.hide(); crearTorneo.hide();
            registrarJugadores.hide(); registrarUser.hide();
            agendarPartidos.hide();
          }if(respuesta==3){
            //eres Federacion
            tipo.text("Federacion");verTorneo.hide(); crearTorneo.hide();
            registrarUser.hide(); registrarJugadores.show(); actuPartido.hide();
            agendarPartidos.show();
          }if(respuesta==4){
            tipo.text("Jugador"); verTorneo.hide(); crearTorneo.hide(); registrarJugadores.hide();
            registrarUser.hide(); actuPartido.hide();
            agendarPartidos.hide();
          }
        }
      });
    }

    oculto();

  registrarUser.click(function() {
    //alert("crear usuarios");
    var espera = 200;
    $.ajax({
      url: "../crearUsuarios/crearUsuarios.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        }, espera);
      }
    });
  });

  /*PARA QUE CUANDO EL USUARIO QUIERA VER UN TORNEO*/
  var verTorneo = $('#verTorneo');

  verTorneo.click(function() {
    //alert("tabla torneos");
    var espera = 200;
    $.ajax({
      url: "../admiTorneos/tablaTorneos.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        }, espera);
      }
    });
  });

  /*PARA QUE CUANDO EL admin quiere crear nuevo torneo*/
  var crearTorneo = $('#crearTorneo');
  crearTorneo.click(function() {
    //alert("crear torneo ");
    var espera = 200;
    $.ajax({
      url: "../admiTorneos/registrarTorneo.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        }, espera);
      }
    });
  });

  /*PARA QUE CUANDO quiere registrar nuevos jugadores (participantes)*/
  var regParticipantes = $('#registrarParticipantes');

  regParticipantes.click(function() {
    //alert("registrar participantes");
    var espera = 200;
    $.ajax({
      url: "../admiParticipantes/tablaTorneosP.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        }, espera);
      }
    });
  });
  menuPrincipal.click(function(){
    window.location.replace('../principal/principal.html');
  });


     agendarPartidos=$('#agendarPartidos');

    agendarPartidos.click(function() {
      var espera = 200;
      $.ajax({
        url: "../asignarPartidos/torneosA.html",
        beforeSend: function() {
          contenedor.text('Cargando...');
        },
        success: function(datos) {
          setTimeout(function() {
            contenedor.html(datos);
          }, espera);
        }
      });
    });

      actuPartido=$('#actuPartido');

      actuPartido.click(function() {
        var espera = 200;
        $.ajax({
          url: "../actualizarPartidos/mostrarPartidos.html",
          beforeSend: function() {
            contenedor.text('Cargando...');
          },
          success: function(datos) {
            setTimeout(function() {
              contenedor.html(datos);
            }, espera);
          }
        });
      });

      
      histoPartido.click(function (e) { 
        e.preventDefault();
        alert("hola");
        var espera = 200;
        $.ajax({
          url: "../historial/historial.html",
          beforeSend: function() {
            contenedor.text('Cargando...');
          },
          success: function(datos) {
            setTimeout(function() {
              contenedor.html(datos);
            }, espera);
          }
        });

        
      });



});
