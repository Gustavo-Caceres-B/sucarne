(function () {
  const mount = document.getElementById('site-footer');
  if (!mount) return;

  const inPages = /\/pages\//i.test(window.location.pathname);

  const assetsBase = inPages ? '..' : '.';
  const indexHref = inPages ? '../index.html' : './index.html';
  const pageHref = (slug) => (inPages ? `./${slug}.html` : `./pages/${slug}.html`);

  mount.innerHTML = `
    <footer class="main-footer">
      <!-- La cordillera va como fondo del CSS, no por JS: pesa 50 KB y no
           necesita el cargado diferido que si necesitaba la foto de carne. -->
      <div class="footer-meat-banner"></div>
      <div class="container footer-grid">
        <div class="footer-col">
          <img src="${assetsBase}/assets/images/logos/logo-sucarne-white.webp" alt="SUCARNE" class="footer-logo" width="1536" height="1024" loading="lazy" decoding="async">
          <p class="footer-desc">Ofreciendo las mejores carnes, frescura y cortes premium para acompañar los mejores momentos en tu mesa.</p>
        </div>
        <div class="footer-col">
          <h2>Enlaces Importantes</h2>
          <ul class="footer-links">
            <li><a href="${indexHref}">Inicio</a></li>
            <li><a href="${pageHref('quienes-somos')}">Quiénes Somos</a></li>
            <li><a href="${pageHref('servicios')}">Servicios</a></li>
            <li><a href="${pageHref('asado-18')}">Asado para el 18</a></li>
            <li><a href="${pageHref('contacto')}">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h2>Información de Contacto</h2>
          <ul class="footer-contact">
            <li><i class="fa-solid fa-envelope" aria-hidden="true"></i> contacto@sucarne.cl</li>
            <li><i class="fa-solid fa-phone" aria-hidden="true"></i><span><a href="tel:+56971387793" class="footer-phone-number">+56 9 7138 7793</a><span class="footer-phone-branch">San Fernando</span></span></li>
            <li><i class="fa-solid fa-phone" aria-hidden="true"></i><span><a href="tel:+56971258082" class="footer-phone-number">+56 9 7125 8082</a><span class="footer-phone-branch">Rancagua</span></span></li>
          </ul>
        </div>
        <div class="footer-col">
          <h2>Síguenos</h2>
          <div class="social-links footer-social">
            <a href="https://www.facebook.com/sucarnechile/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/sucarnechile/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          </div>
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
        <p class="footer-copy-global"><span class="bandera-cl" aria-hidden="true"></span> &copy; ${new Date().getFullYear()} SUCARNE. Todos los derechos reservados. <span class="footer-copy-sep">&middot;</span><span class="footer-copy-sistemas">&copy; Sucarne Sistemas V1.9.6</span></p>
        <div class="footer-truck-wrap">
          <span class="footer-truck-route">Venta en Ruta Sucursal Rancagua</span>
          <img src="${assetsBase}/assets/images/truck-delivery.webp" alt="Camión Sucarne" class="footer-truck" width="2073" height="880" loading="lazy" decoding="async">
          <span class="footer-truck-domain">sucarne.cl</span>
        </div>
      </div>
    </footer>`;
})();
