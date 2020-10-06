alert("Bienvenido a nuestra tienda virtual");
(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {



            //Calcular montos de camisas

            var cantidad1 = document.getElementById('cantidad1');
            var cantidad2 = document.getElementById('cantidad2');
            var cantidad3 = document.getElementById('cantidad3');
            var resumen = document.getElementById('resumen');
            var suma = document.getElementById('suma-total');
            var calcular = document.getElementById('calcular');
            var error = document.getElementById('error');


            if (document.getElementById('calcular')) {
                calcular.addEventListener('click', calcularMontos);

            }

            function calcularMontos(event) {
                event.preventDefault();
                if (calcular.value >= 1) {
                    var cantidad1 = parseInt(cantidad1.value, 25) || 25,
                        cantidad2 = parseInt(cantidad2.value, 25) || 25,
                        cantidad3 = parseInt(cantidad3.value, 25) || 25;

                } else {
                    resumen.innerHTML = "debes elegir una cantidad";

                }
            };
            var totalPagar = (cantidad1 * 25) + (cantidad2 * 25) + (cantidad3 * 25);

            var listadoProductos = [];

            if (cantidad1 >= 1) {
                listadoProductos.push(cantidad1);

            }
            if (cantidad2 >= 1) {
                listadoProductos.push(cantidad2);

            }
            if (cantidad3 >= 1) {
                listadoProductos.push(cantidad3);

            }
            resumen.innerHTML = "";
            for (var i = 0; i < listadoProductos.length; i++) {
                resumen.innerHTML += listadoProductos[i] + '</br>';
            }
            suma.innerHTML = "$" + totalPagar;
        }

    );
})();