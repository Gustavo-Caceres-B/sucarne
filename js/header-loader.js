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
            <img src="${assetsBase}/assets/images/logos/logo-sucarne-white.png" alt="SUCARNE" class="top-logo">
          </a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Abrir menú"><span></span><span></span><span></span></button>
        <div class="actions-area">
          <a href="${sucursalesHref}" class="header-link">
            <i class="fa-solid fa-location-dot"></i> Sucursales
          </a>
          <a href="${sucursalesHref}" class="header-link">
            <i class="fa-brands fa-whatsapp"></i> Whatsapp
          </a>
          <a href="${pageHref('quienes-somos')}" class="header-link">
            <i class="fa-solid fa-users"></i> Quiénes Somos
          </a>
          <a href="${pageHref('servicios')}" class="header-link">
            <i class="fa-solid fa-cart-shopping"></i> Servicios
          </a>
          <a href="${pageHref('contacto')}" class="header-link">
            <i class="fa-solid fa-envelope"></i> Contacto
          </a>
        </div>
      </div>
    </header>`;
})();
