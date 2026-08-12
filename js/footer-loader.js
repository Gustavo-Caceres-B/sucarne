(function () {
  const mount = document.getElementById('site-footer');
  if (!mount) return;

  const inPages = /\/pages\//i.test(window.location.pathname);

  const assetsBase = inPages ? '..' : '.';
  const indexHref = inPages ? '../index.html' : './index.html';
  const pageHref = (slug) => (inPages ? `./${slug}.html` : `./pages/${slug}.html`);

  /* Cuatro columnas, no cinco. "Síguenos" ocupaba una entera para dos
     iconos: ahora va debajo del logo, que es donde uno la busca. Y el
     bloque del camión deja de estar posicionado en absoluto sobre la
     línea del copyright —que era lo que lo dejaba corrido— y pasa a vivir
     dentro de la columna de contacto, que es de lo que habla. */
  mount.innerHTML = `
    <footer class="main-footer">
      <!-- La cordillera va como fondo del CSS, no por JS: pesa 50 KB y no
           necesita el cargado diferido que si necesitaba la foto de carne. -->
      <div class="footer-meat-banner"></div>
      <div class="container footer-grid">

        <div class="footer-col footer-col--marca">
          <img src="${assetsBase}/assets/images/logos/logo-sucarne-white-288.webp" alt="SUCARNE" class="footer-logo" width="288" height="192" loading="lazy" decoding="async">
          <p class="footer-desc">Carnicería familiar en San Fernando y Rancagua. Cortes frescos y atención de barrio.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/sucarnechile/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/sucarnechile/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h2>El sitio</h2>
          <ul class="footer-links">
            <li><a href="${indexHref}">Inicio</a></li>
            <li><a href="${pageHref('quienes-somos')}">Quiénes Somos</a></li>
            <li><a href="${pageHref('servicios')}">Servicios y cortes</a></li>
            <li><a href="${pageHref('asado-18')}">Asado para el 18</a></li>
            <li><a href="${pageHref('contacto')}">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h2>Contacto</h2>
          <ul class="footer-contact">
            <li>
              <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              <a href="mailto:contacto@sucarne.cl">contacto@sucarne.cl</a>
            </li>
            <li>
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
              <span><a href="tel:+56971387793" class="footer-phone-number">+56 9 7138 7793</a><span class="footer-phone-branch">San Fernando</span></span>
            </li>
            <li>
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
              <span><a href="tel:+56971258082" class="footer-phone-number">+56 9 7125 8082</a><span class="footer-phone-branch">Rancagua</span></span>
            </li>
            <li class="footer-ruta">
              <img src="${assetsBase}/assets/images/truck-delivery.webp" alt="" class="footer-truck" width="2073" height="880" loading="lazy" decoding="async">
              <span>Venta en ruta<span class="footer-phone-branch">Sucursal Rancagua</span></span>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h2>Legal</h2>
          <ul class="footer-links">
            <li><a href="${pageHref('legal')}">Información Legal</a></li>
            <li><a href="${pageHref('politica-privacidad')}">Política de Privacidad</a></li>
            <li><a href="${pageHref('terminos-condiciones')}">Términos y Condiciones</a></li>
          </ul>
        </div>

      </div>
      <div class="footer-bottom-row">
        <p class="footer-copy-global"><span class="bandera-cl" aria-hidden="true"></span> &copy; ${new Date().getFullYear()} SUCARNE. Todos los derechos reservados. <span class="footer-copy-sep">&middot;</span> sucarne.cl <span class="footer-copy-sep">&middot;</span><span class="footer-copy-sistemas">&copy; Sucarne Sistemas V2.2.2</span></p>
      </div>
    </footer>`;
})();
