$(document).ready(function() {

  var email = $('#inputCorreo');
  var contrasena = $('#inputPassword');
  var boton = $('#iniciarSesion');


  boton.click(function(e) {
    e.preventDefault();
    if (email.val() == "" || contrasena.val() == "") {
      console.log("Todo los capos son obligatorios");
    } else {
      var datos = ('correo=' + email.val() + '&contrasena=' + contrasena.val())
      console.log(datos);
      $.ajax({
        type: "get",
        url: "../inicioSesion/php/iniciarSesion.php",
        data: datos,
        success: function(respuestas) {
          if (respuestas == 1) {
            console.log("eres administrador");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 2) {
            console.log("eres monitor");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 3) {
            console.log("eres federacion");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 4) {
            console.log("eres jugador");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 0) {
            console.log("lo sentimos no estar registrado");
          }
        }
      });

    }

  });


});