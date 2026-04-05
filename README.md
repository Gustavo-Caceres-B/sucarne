# SUCARNE

Sitio web oficial de **SUCARNE Chile** - Empresa familiar dedicada a la comercialización de carnes y productos cárnicos de alta calidad.

## 🌐 URL

https://sucarne.cl

## 📁 Estructura del Proyecto

```
sucarne/
├── index.html                  # Página principal
├── gracias.html                # Página de confirmación de contacto
├── css/
│   ├── styles.css              # Estilos globales
│   └── pages/                  # Estilos específicos por página
│       ├── quienes-somos.css
│       ├── servicios.css
│       └── legal.css
├── js/
│   ├── script.js               # Scripts globales
│   └── footer-loader.js        # Cargador dinámico del footer
├── pages/                      # Páginas adicionales
│   ├── contacto.html
│   ├── quienes-somos.html
│   ├── servicios.html
│   └── legal.html
├── assets/
│   └── images/
│       ├── backgrounds/        # Fondos de secciones
│       ├── hero/               # Imágenes del carrusel principal
│       ├── logos/              # Logotipos de marca y partners
│       └── products/           # Imágenes de productos
├── tools/                      # Scripts de procesamiento de imágenes
│   ├── autoslice*.ps1
│   ├── remove_bg*.ps1
│   ├── composite.ps1
│   ├── clean_bg.ps1
│   └── slice_logos.ps1
└── docs/                       # Documentación adicional

```

## 🎨 Sistema de Diseño

### Colores Principales

| Variable | Valor | Uso |
|----------|-------|-----|
| `--c-darkblue` | #3E4B99 | Header, secciones importantes |
| `--c-lightblue` | #3EA6F0 | Acentos, hover states |
| `--c-orange` | #F29544 | Ofertas miércoles |
| `--c-yellow` | #F6C844 | CTA, destacados |
| `--c-red` | #EE2C3C | Botones primarios, acentos |
| `--c-text` | #2B2B2B | Texto principal |
| `--c-text-light` | #666 | Texto secundario |

### Tipografía

- **Fuente Principal**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Pesos utilizados**: 400, 500, 600, 700, 800

### Iconos

- [Font Awesome 6.4.0](https://fontawesome.com/) via CDN

## 📱 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Carrusel de hero con 4 slides
- ✅ Formulario de contacto con Web3Forms
- ✅ Integración con WhatsApp Business
- ✅ Mapas de Google Maps embebidos
- ✅ Sección de ofertas semanales
- ✅ Información de 2 sucursales (San Fernando y Rancagua)

## 🚀 Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (sin frameworks)
- Git para control de versiones

## 🛠️ Scripts de Procesamiento

Los scripts PowerShell en `tools/` se utilizan para procesar imágenes:

- **autoslice.ps1**: Recorte automático de imágenes
- **remove_bg.ps1**: Eliminación de fondos
- **composite.ps1**: Composición de imágenes
- **slice_logos.ps1**: División de logos en grid

## 📞 Contacto

### Sucursal San Fernando
- **Dirección**: Av. Bernardo O'Higgins 700
- **Teléfono**: +56 9 7138 7793
- **WhatsApp**: [+56 9 7138 7793](https://wa.me/56971387793)

### Sucursal Rancagua
- **Dirección**: Av. Libertador Gral. Bernardo O'Higgins 1001
- **Teléfono**: +56 9 7125 8082
- **WhatsApp**: [+56 9 7125 8082](https://wa.me/56971258082)

## 👨‍💻 Desarrollo

### Requisitos

- Cualquier servidor web local (Live Server, Python http.server, etc.)
- Navegador moderno con soporte para CSS Grid y Flexbox

### Convenciones de Código

- Usar nombres descriptivos en kebab-case para archivos
- CSS: variables con prefijo `--c-` para colores
- JS: funciones en camelCase, constantes en UPPER_SNAKE_CASE
- HTML: atributos en minúsculas, comillas dobles

## 📄 Licencia

© 2026 SUCARNE. Todos los derechos reservados.

---

Desarrollado con ❤️ para SUCARNE Chile
