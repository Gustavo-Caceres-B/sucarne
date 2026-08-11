/* ---------------------------------------------------------------------
   Lista del 18 — marca lo que ya tienes listo.
   Se guarda en el propio navegador (localStorage), no viaja a ninguna
   parte y no hay cuenta que crear. Si el navegador tiene el
   almacenamiento bloqueado, la lista igual funciona: solo no recuerda.
   Se saca despues del 19 de septiembre borrando este archivo y su <script>.
   --------------------------------------------------------------------- */
(function () {
    var LLAVE = 'sucarne-lista-18';
    var lista = document.querySelector('.fp-tipico-grid');
    if (!lista) return;

    var items = [].slice.call(lista.querySelectorAll('.fp-tipico-item'));
    if (!items.length) return;

    var cuenta = document.querySelector('.fp-lista-cuenta strong');
    var total = document.querySelector('.fp-lista-cuenta em');

    function leer() {
        try {
            return JSON.parse(localStorage.getItem(LLAVE)) || {};
        } catch (e) {
            return {};
        }
    }

    function guardar(estado) {
        try {
            localStorage.setItem(LLAVE, JSON.stringify(estado));
        } catch (e) {
            /* modo incognito o almacenamiento lleno: no es motivo para romper */
        }
    }

    function refrescar() {
        var listos = items.filter(function (b) {
            return b.getAttribute('aria-pressed') === 'true';
        }).length;
        if (cuenta) cuenta.textContent = listos;
        lista.setAttribute('data-listos', listos);
    }

    var estado = leer();

    items.forEach(function (boton) {
        var id = boton.getAttribute('data-fp');
        if (estado[id]) boton.setAttribute('aria-pressed', 'true');

        boton.addEventListener('click', function () {
            var marcado = boton.getAttribute('aria-pressed') === 'true';
            boton.setAttribute('aria-pressed', marcado ? 'false' : 'true');
            estado[id] = !marcado;
            guardar(estado);
            refrescar();
        });
    });

    if (total) total.textContent = items.length;
    refrescar();
})();
