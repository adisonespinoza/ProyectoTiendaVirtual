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
        var total = document.getElementById('pagar');


        total.addEventListener('click', function() {
                if (total.value === ' ') {
                    $alert('debes tomar producto')
                }
            })
            //if (document.getElementById('calcular')) {
        calcular.addEventListener('click', calcularMontos);

        // }

        function calcularMontos(event) {
            event.preventDefault();
            // console.log('has hecho clic');
            if (calcular.value === '') {
                alert('debes elegir un regalo');
                calcular.focus();
            } else {
                console.log(cantidad1.value);
                console.log(cantidad2.value);
                console.log(cantidad3.value);
            }
            /* Swal.fire({
                 type: 'error',
                 title: 'Oops... Ha ocurrido un error',
                 text: 'Para poder realizar el calculo, deber seleccionar almenos un producto    !',

             })*/



            /* } else {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops... Ha ocurrido un error',
                        text: 'Para poder realizar el calculo, deber seleccionar almenos un producto    !',

                    })
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
            suma.innerHTML = "$" + totalPagar;*/


        };
    })
})();