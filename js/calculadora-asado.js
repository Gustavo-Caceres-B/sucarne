/* ---------------------------------------------------------------------
   Calculadora de carne para el asado.
   Toma cuántos son y devuelve cuánto encargar, con los mismos criterios
   que la tabla de la página del 18: 400-500 g de carne por adulto, la
   mitad por niño, y 1 a 1,5 longanizas por adulto. Con eso arma el
   mensaje de WhatsApp ya escrito, para que el cliente solo apriete enviar.
   No es del 18 en particular: sirve todo el año.
   --------------------------------------------------------------------- */
(function () {
    var caja = document.querySelector('.calc');
    if (!caja) return;

    var adultos = caja.querySelector('#calc-adultos');
    var ninos = caja.querySelector('#calc-ninos');
    var previa = caja.querySelector('#calc-previa');
    var hueso = caja.querySelector('#calc-hueso');
    var salCarne = caja.querySelector('#calc-carne');
    var salLong = caja.querySelector('#calc-long');
    var salTotal = caja.querySelector('#calc-total');
    var enlaces = caja.querySelectorAll('.calc-wa');

    if (!adultos || !ninos || !salCarne) return;

    function entero(campo, tope) {
        var v = parseInt(campo.value, 10);
        if (isNaN(v) || v < 0) v = 0;
        if (v > tope) v = tope;
        return v;
    }

    /* Los kilos se muestran con coma, como se escriben acá, y con un solo
       decimal: "3,7 kg" y no "3.68 kg". Sobre 10 kg el decimal ya no
       aporta nada, se redondea a medio kilo. */
    function kilos(g) {
        var k = g / 1000;
        if (k >= 10) k = Math.round(k * 2) / 2;
        else k = Math.round(k * 10) / 10;
        return k.toFixed(k % 1 === 0 ? 0 : 1).replace('.', ',');
    }

    function calcular() {
        var a = entero(adultos, 300);
        var n = entero(ninos, 300);

        // Rango base en gramos: 400-500 por adulto, la mitad por niño.
        var bajo = a * 400 + n * 200;
        var alto = a * 500 + n * 250;

        // Con previa (choripán, empanadas, anticuchos) se come menos asado.
        if (previa && previa.checked) { bajo *= 0.85; alto *= 0.85; }

        // Los cortes con hueso rinden menos: se suma un 20% al peso.
        if (hueso && hueso.checked) { bajo *= 1.2; alto *= 1.2; }

        var lBajo = Math.ceil(a * 1 + n * 0.5);
        var lAlto = Math.ceil(a * 1.5 + n * 1);

        var hay = (a + n) > 0;

        if (!hay) {
            salCarne.textContent = '—';
            salLong.textContent = '—';
            if (salTotal) salTotal.textContent = 'Pon cuántos son y te decimos cuánto encargar.';
        } else {
            salCarne.textContent = kilos(bajo) + ' – ' + kilos(alto) + ' kg';
            salLong.textContent = lBajo + ' – ' + lAlto + ' unidades';
            if (salTotal) {
                salTotal.textContent = 'Para ' + a + (a === 1 ? ' adulto' : ' adultos') +
                    (n ? ' y ' + n + (n === 1 ? ' niño' : ' niños') : '') + '.';
            }
        }

        // El enlace de WhatsApp se rearma en cada cambio, con el pedido ya
        // escrito. Si no hay comensales queda el mensaje genérico.
        var texto = hay
            ? 'Hola, quiero encargar carne. Somos ' + a + (a === 1 ? ' adulto' : ' adultos') +
              (n ? ' y ' + n + (n === 1 ? ' niño' : ' niños') : '') +
              '. Segun la calculadora necesito ' + kilos(bajo) + ' a ' + kilos(alto) +
              ' kg de carne y ' + lBajo + ' a ' + lAlto + ' longanizas.' +
              (hueso && hueso.checked ? ' Prefiero cortes con hueso.' : '') +
              ' Me confirman disponibilidad?'
            : 'Hola, quiero encargar carne.';

        for (var i = 0; i < enlaces.length; i++) {
            var fono = enlaces[i].getAttribute('data-fono');
            enlaces[i].href = 'https://wa.me/' + fono + '?text=' + encodeURIComponent(texto);
        }
    }

    [adultos, ninos, previa, hueso].forEach(function (c) {
        if (!c) return;
        c.addEventListener('input', calcular);
        c.addEventListener('change', calcular);
    });

    calcular();
})();
