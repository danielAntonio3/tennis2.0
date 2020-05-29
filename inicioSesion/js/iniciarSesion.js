$(document).ready(function() {

  var email = $('#inputCorreo');
  var contrasena = $('#inputPassword');
  var boton = $('#iniciarSesion');


  boton.click(function(e) {
    e.preventDefault();
    if (email.val() == "" || contrasena.val() == "") {
      alert("Todos los campos son obligatorios");
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
            alert("Bienvenido");
            console.log("eres administrador");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 2) {
            alert("Bienvenido");
            console.log("eres monitor");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 3) {
            alert("Bienvenido");
            console.log("eres federacion");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == 4) {
            alert("Bienvenido");
            console.log("eres jugador");
            window.location.replace('../perfiles/perfil.html');
          }
          if (respuestas == "0") {
            alert("Verifica tu correo y contraseña");
            console.log("lo sentimos no estar registrado");
          }
        }
      });

    }

  });


});