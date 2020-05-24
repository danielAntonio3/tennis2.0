$(document).ready(function(){
  var nombre=$('#nombre');
  var tipo=$('#tipo');
  var password=$('#password');



  $('#botonSubmit').click(function(){
    if(nombre.val()=="" || tipo.val()=="" || password.val()==""){
      alert('Todos los campos son obligatorios');
    }
    else{


      var datos=('nombre:'+nombre.val()+'&tipo:'+tipo.val() +'&password:'+password.val());
      $.ajax({
        type:'get',
        url:'./php/registrarUsuarios.php',
        data:datos,
        success:function (respuesta){
          if(respuesta==1){
            alert('correcta');

            nombre.val('');
            tipo.val('');
            password.val('');

          }else{
            alert('incorrecta');
          }
        }
      });
    }
  });
});
