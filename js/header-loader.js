(function () {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  const inPages = /\/pages\//i.test(window.location.pathname);
  const assetsBase = inPages ? '..' : '.';
  const indexHref = inPages ? '../index.html' : './index.html';
  const sucursalesHref = indexHref + '#sucursales';
  const pageHref = (slug) => inPages ? './' + slug + '.html' : './pages/' + slug + '.html';

  mount.outerHTML = `
    <header class="main-header">
      <div class="header-container">
        <div class="logo-area">
          <a href="${indexHref}">
            <img src="${assetsBase}/assets/images/logos/logo-sucarne-white.webp" alt="SUCARNE" class="top-logo" width="1536" height="1024">
          </a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
        <nav class="actions-area" id="main-nav" aria-label="Navegación principal">
          <a href="${sucursalesHref}" class="header-link">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i> Sucursales
          </a>
          <div class="wa-header-item">
            <a href="${sucursalesHref}" class="header-link" aria-haspopup="true" aria-expanded="false">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Whatsapp
            </a>
          </div>
          <a href="${pageHref('quienes-somos')}" class="header-link">
            <i class="fa-solid fa-users" aria-hidden="true"></i> Quiénes Somos
          </a>
          <a href="${pageHref('servicios')}" class="header-link">
            <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i> Servicios
          </a>
          <a href="${pageHref('contacto')}" class="header-link">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i> Contacto
          </a>
        </nav>
      </div>
    </header>`;
})();
