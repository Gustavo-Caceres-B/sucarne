/* ---------------------------------------------------------------------
   Guía de cortes: filtra las fichas según lo que se va a cocinar.
   Sin librerías y sin pedir nada al servidor: las 27 fichas ya vienen en
   el HTML, así que también funcionan si el JavaScript no carga — solo se
   ven todas juntas, que es un estado perfectamente usable.
   --------------------------------------------------------------------- */
(function () {
    var caja = document.querySelector('.cortes');
    if (!caja) return;

    var filtros = [].slice.call(caja.querySelectorAll('.cortes-filtro'));
    var fichas = [].slice.call(caja.querySelectorAll('.corte'));
    var cuenta = caja.querySelector('.cortes-cuenta strong');
    if (!filtros.length || !fichas.length) return;

    function aplicar(uso) {
        var visibles = 0;

        fichas.forEach(function (f) {
            var usos = (f.getAttribute('data-usos') || '').split(' ');
            var calza = uso === 'todos' || usos.indexOf(uso) !== -1;
            /* hidden y no display:none para que el corte desaparezca también
               para quien navega con lector de pantalla, no solo a la vista */
            f.hidden = !calza;
            if (calza) visibles++;
        });

        filtros.forEach(function (b) {
            b.setAttribute('aria-pressed', b.getAttribute('data-uso') === uso ? 'true' : 'false');
        });

        if (cuenta) cuenta.textContent = visibles;
        caja.setAttribute('data-uso', uso);
    }

    filtros.forEach(function (b) {
        b.addEventListener('click', function () {
            aplicar(b.getAttribute('data-uso'));
        });
    });

    aplicar('todos');
})();
