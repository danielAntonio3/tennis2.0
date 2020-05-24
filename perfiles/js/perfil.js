$(document).ready(function () {
    
    var registrarUser=$('#registrarUser');
    var contenedor=$('#recargar');
    registrarUser.click(function(){ 
        alert("hola");
        var espera=2000;
        $.ajax({
            url: "../../crearUsuarios/crearUsuarios.html",
            beforeSend:function(){
                contenedor.text('Cargando...');
            },
            success:function(datos){
                setTimeout(function(){
                        contenedor.html(datos);
                },espera);
            }
        });
    });

    /*PARA QUE CUANDO EL USUARIO*/
    var verTorneo=$('#verTorneo');
    var contenedor=$('#recargar');

    verTorneo.click(function(){ 
        alert("hola");
        var espera=2000;
        $.ajax({
            url: "../../admiTorneos/tablaTorneos.html",
            beforeSend:function(){
                contenedor.text('Cargando...');
            },
            success:function(datos){
                setTimeout(function(){
                        contenedor.html(datos);
                },espera);
            }
        });
    });

     /*PARA QUE CUANDO EL admin quiere crear nuevo torneo*/
     var crearTorneo=$('#crearTorneo');
     var contenedor=$('#recargar');
 
     crearTorneo.click(function(){ 
         alert("hola");
         var espera=2000;
         $.ajax({
             url: "../../admiTorneos/registrarTorneo.html",
             beforeSend:function(){
                 contenedor.text('Cargando...');
             },
             success:function(datos){
                 setTimeout(function(){
                         contenedor.html(datos);
                 },espera);
             }
         });
     });
    

});