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
      alert("hola");
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
            registrarJugadores.hide();
          }if(respuesta==3){
            //eres Federacion
            tipo.text("Federacion");verTorneo.hide(); crearTorneo.hide();
            registrarUser.hide(); registrarJugadores.show(); actuPartido.hide();
          }if(respuesta==4){
            tipo.text("Jugador"); verTorneo.hide(); crearTorneo.hide(); registrarJugadores.hide();
            registrarUser.hide(); actuPartido.hide();
          }
        }
      });
    }

    oculto();

  registrarUser.click(function() {
    alert("crear usuarios");
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

  /*PARA QUE CUANDO EL USUARIO*/
  var verTorneo = $('#verTorneo');

  verTorneo.click(function() {
    alert("tabla torneos");
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
    alert("crear torneo ");
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
    alert("registrar participantes");
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
});