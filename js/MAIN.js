(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {

        //Mapa Personalizado
        var map = L.map('mapa').setView([-34.603338, -58.410637], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-34.603338, -58.410637]).addTo(map)
            .bindPopup('Mapa Personalizado por Irene & Adison.<br> Abasto Shopping CABA')
            .openPopup();

        //Evento del video

        const video = document.querySelector('.video')
        video.addEventListener('ended', function() {
            Swal.fire({
                title: 'Desea ver el video de nuevo?',
                text: "Por favor seleccione!",
                icon: 'success',
                showCancelButton: true,

                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            })
            var result = result;
            if (result) {
                video.play();
            } else {
                video.ended();
            }
        })
        video.addEventListener('mouseover', function() {
            video.play();
        })

        video.style.cursor = 'pointer';
    })

    //Menu fijo

    var headerr = $('.fijo').height();
    var barraAltura = $('.barra').innerHeight();
    //console.log(headerr)
    // console.log(barraAltura)
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        if (scroll > '160') {
            //   console.log('pasaste la pantalla')
            $('.barra').addClass('fixed')
            $('body').css({ 'margin-top': barraAltura + 'px' });

        } else {
            //console.log('aun no')
            $('.barra').removeClass('fixed')
            $('body').css({ 'margin-top': '0px' })
        }
    })

    //Calcular montos de camisas

    var cantidad1 = document.getElementById('cantidad1');
    var cantidad2 = document.getElementById('cantidad2');
    var cantidad3 = document.getElementById('cantidad3');
    var cantidad4 = document.getElementById('cantidad4');
    var cantidad5 = document.getElementById('cantidad5');
    var cantidad6 = document.getElementById('cantidad6');
    var cantidad7 = document.getElementById('cantidad7');
    var cantidad8 = document.getElementById('cantidad8');
    var cantidad9 = document.getElementById('cantidad9');
    var cantidad10 = document.getElementById('cantidad10');
    var cantidad11 = document.getElementById('cantidad11');
    var cantidad12 = document.getElementById('cantidad12');
    var cantidad13 = document.getElementById('cantidad13');
    var cantidad14 = document.getElementById('cantidad14');
    var resumen = document.getElementById('lista_productos');
    var suma = document.getElementById('suma-total');
    var calcular = document.getElementById('calcular');
    var total = document.getElementById('pagar');

    calcular.addEventListener('click', calcularMontos);

    function calcularMontos(e) {
        e.preventDefault();

        if (calcular === "") {
            Swal.fire({
                type: 'error',
                title: 'Oops... Ha ocurrido un error',
                text: 'Para poder realizar el calculo, deber seleccionar almenos un producto    !',
            })
        } else {
            var c1 = cantidad1.value,
                c2 = cantidad2.value,
                c3 = cantidad3.value,
                c4 = cantidad4.value,
                c5 = cantidad5.value,
                c6 = cantidad6.value,
                c7 = cantidad7.value,
                c8 = cantidad8.value,
                c9 = cantidad9.value,
                c10 = cantidad10.value,
                c11 = cantidad11.value,
                c12 = cantidad12.value,
                c13 = cantidad13.value,
                c14 = cantidad14.value;
            var totalPagar = (c1 * 25) + (c2 * 25) + (c3 * 25) + (c4 * 25) + (c5 * 25) + (c6 * 25) + (c7 * 25) + (c8 * 25) + (c9 * 25) + (c10 * 25) + (c11 * 25) + (c12 * 25) + (c13 * 25) + (c14 * 25);

            var listadoProductos = [];
            if (c1 >= 1) {
                listadoProductos.push(c1 + ' VueJs');

            }
            if (c2 >= 1) {
                listadoProductos.push(c2 + ' AngularJs');

            }
            if (c3 >= 1) {
                listadoProductos.push(c3 + ' React');

            }
            if (c4 >= 1) {
                listadoProductos.push(c4 + ' Redux');

            }
            if (c5 >= 1) {
                listadoProductos.push(c5 + ' NodeJs');

            }
            if (c6 >= 1) {
                listadoProductos.push(c6 + ' Sass');

            }
            if (c7 >= 1) {
                listadoProductos.push(c7 + ' HTML5');

            }
            if (c8 >= 1) {
                listadoProductos.push(c8 + ' GitHub');

            }
            if (c9 >= 1) {
                listadoProductos.push(c9 + ' Bulma');

            }
            if (c10 >= 1) {
                listadoProductos.push(c10 + ' TypeScript');

            }
            if (c11 >= 1) {
                listadoProductos.push(c11 + ' Drupal');

            }
            if (c12 >= 1) {
                listadoProductos.push(c12 + ' JavaScript');

            }
            if (c13 >= 1) {
                listadoProductos.push(c13 + ' GraphQL');

            }
            if (c14 >= 1) {
                listadoProductos.push(c14 + ' WordPress');

            }
            resumen.style.display = "block";
            resumen.innerHTML = '';
            for (var i = 0; i < listadoProductos.length; i++) {
                resumen.innerHTML += listadoProductos[i] + '</br>';
            }
            suma.innerHTML = "$" + totalPagar.toFixed(2);
        }
    };

    total.addEventListener('click', function() {;

        if (total === suma) {
            Swal.fire({
                type: 'success',
                title: 'Gracias por su compra!!!',
                text: 'En breves recibira supedido!',
            })
        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops... Ha ocurrido un error',
                text: 'Para poder realizar el calculo, deber seleccionar almenos un producto!',
            })
        }
    })
})();