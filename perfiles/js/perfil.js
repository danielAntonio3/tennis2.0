$(document).ready(function () {
    
    var registrarUser=$('#registrarUser');
    var contenedor=$('#recargar');
    registrarUser.click(function(){ 
        alert("crear usuarios");
        var espera=200;
        $.ajax({
            url: "../crearUsuarios/crearUsuarios.html",
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

    verTorneo.click(function(){ 
        alert("tabla torneos");
        var espera=200;
        $.ajax({
            url: "../admiTorneos/tablaTorneos.html",
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
     crearTorneo.click(function(){ 
         alert("crear torneo ");
         var espera=200;
         $.ajax({
             url: "../admiTorneos/registrarTorneo.html",
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