$(document).ready(function () {
    
        var tabla=$('#tabla');

        function logic() {
            $.ajax({
                type: "get",
                url: "./php/mostrarTorneos.php",
                success: function (respuesta) {
                    var js = JSON.parse(respuesta);
                    console.log(js);
                }
            });
        }

        logic();

        


});