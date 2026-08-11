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
    var grupos = [].slice.call(caja.querySelectorAll('.cortes-grupo'));
    var cuenta = caja.querySelector('.cortes-cuenta strong');
    if (!filtros.length || !fichas.length) return;

    /* Cada filtro muestra cuantos cortes tiene. El numero se calcula del
       propio HTML al cargar, asi que si manana se agrega o se saca un
       corte el contador se ajusta solo y nunca queda mintiendo. */
    filtros.forEach(function (b) {
        var uso = b.getAttribute('data-uso');
        var n = uso === 'todos' ? fichas.length : fichas.filter(function (f) {
            return (f.getAttribute('data-usos') || '').split(' ').indexOf(uso) !== -1;
        }).length;
        var hueco = b.querySelector('.cortes-filtro-n');
        if (hueco) hueco.textContent = n;
    });

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

        /* Un grupo sin ningun corte visible se esconde entero, titulo
           incluido: dejar "Cecinas" con la lista vacia debajo se ve como
           un error. Y su contador se ajusta a lo que quedo. */
        grupos.forEach(function (g) {
            var vivos = [].slice.call(g.querySelectorAll('.corte')).filter(function (f) {
                return !f.hidden;
            }).length;
            g.hidden = vivos === 0;
            var n = g.querySelector('.cortes-grupo-n');
            if (n) n.textContent = vivos;
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
