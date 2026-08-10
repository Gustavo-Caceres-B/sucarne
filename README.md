# SUCARNE

Sitio web oficial de **SUCARNE Chile** — empresa familiar dedicada a la comercialización de carnes y productos cárnicos de alta calidad.

## 🌐 URL

https://sucarne.cl — sitio estático publicado en GitHub Pages con dominio propio (ver `CNAME`).

## 📁 Estructura del Proyecto

```
sucarne/
├── index.html                      # Página principal (carrusel, ofertas, sucursales)
├── gracias.html                    # Confirmación de contacto (noindex)
├── css/
│   ├── modules/                    # Estilos globales. El ORDEN importa: define la cascada
│   │   ├── base.css                # 1. Reset y variables
│   │   ├── home.css                # 2. Portada
│   │   ├── contact.css             # 3. Formulario
│   │   ├── site-chrome.css         # 4. Header y footer
│   │   ├── enhancements.css        # 5. Refinamientos visuales
│   │   └── responsive.css          # 6. Media queries — SIEMPRE al final
│   └── pages/                      # Estilos específicos por página
│       ├── legal.css               # legal, política-privacidad, términos
│       ├── quienes-somos.css
│       └── servicios.css
├── js/
│   ├── header-loader.js            # Inyecta el header
│   ├── footer-loader.js            # Inyecta el footer
│   └── script.js                   # Carrusel, menú móvil, picker de WhatsApp
├── pages/
│   ├── contacto.html
│   ├── quienes-somos.html
│   ├── servicios.html
│   ├── legal.html                  # Índice de documentos legales
│   ├── politica-privacidad.html
│   └── terminos-condiciones.html
├── assets/images/
│   ├── backgrounds/  hero/  logos/  monos/  ofertas/  products/
├── docs/BITACORA.md                # Registro de trabajo y pendientes
├── robots.txt  ·  sitemap.xml  ·  CNAME
```

## 🎨 Sistema de Diseño

### Colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--c-darkblue` | #3E4B99 | Header, secciones importantes |
| `--c-lightblue` | #3EA6F0 | Fondo de badges (no usar como texto sobre blanco) |
| `--c-orange` | #F29544 | Fondo de badges (no usar como texto sobre blanco) |
| `--c-yellow` | #F6C844 | Destacados sobre fondo oscuro |
| `--c-red` | #EE2C3C | Botones primarios, acentos |
| `--c-text` | #2B2B2B | Texto principal |
| `--c-text-light` | #666 | Texto secundario |

Los colores claros (amarillo, naranja, celeste) **no alcanzan contraste AA como texto sobre blanco**: usarlos solo como fondo con texto blanco encima, o sobre fotografía oscura.

### Tipografía

- **Fuente**: [Roboto](https://fonts.google.com/specimen/Roboto) (Google Fonts, carga asíncrona)
- **Pesos**: 300, 400, 700, 900

### Iconos

- [Font Awesome 6.4.0](https://fontawesome.com/) vía CDN. Todos los `<i>` llevan `aria-hidden="true"` por ser decorativos.

### Variantes del logo

Son distintas, no copias. Elegir según el fondo:

| Archivo | Qué es | Cuándo usarlo |
|---------|--------|---------------|
| `logo-sucarne-white.webp` | Óvalo sin borde | Sobre fondo oscuro (header, footer, marca de agua) |
| `logo-sucarne-borde-blanco.webp` | Óvalo con contorno blanco | Sobre fondo claro o fotografía, donde el anterior se pierde |
| `logo-sucarne-banner.webp` | Versión apaisada | Encabezados de sección |
| `blanco sin fondo.webp` | Apaisada, solo blanco | `gracias.html`, sobre el azul |

El favicon (`assets/favicon.ico`) se genera desde `logo-sucarne-white.webp` sobre el azul de
marca: a 16 px se lee mejor que la variante con borde, que a ese tamaño pierde superficie roja.

## 📱 Características

- Diseño responsive (breakpoints en 992 / 768 / 480 px)
- Carrusel de 5 slides, con carga diferida de fondos y respeto por `prefers-reduced-motion`
- Formulario de contacto con Web3Forms (una access key por sucursal)
- WhatsApp flotante por sucursal
- Mapas de Google embebidos
- Datos estructurados JSON-LD: `WebSite`, `MeatEstablishment` por sucursal y `BreadcrumbList`

## 🚀 Tecnologías

HTML5 semántico · CSS3 con variables · JavaScript vanilla · Git. Sin frameworks ni paso de compilación.

## 🛠️ Convenciones

- Archivos en kebab-case; variables de color con prefijo `--c-`
- JS: funciones en camelCase, constantes en UPPER_SNAKE_CASE
- Imágenes: siempre con `width` y `height` (evita saltos de layout) y `loading="lazy"` si están bajo el pliegue
- **Cache busting**: al cambiar un CSS o JS hay que subir su `?v=` en las 8 páginas, o el navegador sirve la versión vieja
- Los estilos globales se enlazan como 6 `<link>` separados en cada página, no con `@import` (los `@import` encadenados bloquean el render)

## 💻 Desarrollo

Cualquier servidor local sirve. Por ejemplo:

```bash
python -m http.server 8000
```

Luego abrir http://127.0.0.1:8000

## 📞 Contacto

### Sucursal San Fernando
- Av. Bernardo O'Higgins 700
- WhatsApp: [+56 9 7138 7793](https://wa.me/56971387793) · Fijo: 722-712204
- Lun-Vie 09:15–13:30 / 15:00–18:30 · Sáb 09:15–18:00 · Dom cerrado

### Sucursal Rancagua
- Av. Libertador Gral. Bernardo O'Higgins 1001
- WhatsApp: [+56 9 7125 8082](https://wa.me/56971258082) · Fijo: 722-242491
- Lun-Vie 08:30–13:30 / 15:00–17:30 · Sáb 08:30–14:00 · Dom cerrado

## 📄 Licencia

© 2026 SUCARNE. Todos los derechos reservados.

---

Desarrollado con ❤️ para SUCARNE Chile
