# 📓 Bitácora de desarrollo — SUCARNE

Registro de trabajo y tareas pendientes. Última sesión: **27-06-2026**.

---

## ✅ Hecho en la sesión del 27-06-2026

### 1. Limpieza del repositorio
- Eliminadas **~74 MB** de imágenes no usadas (`Thumbs.db`, duplicados, experimentos `Gemini_*`/`blob_*`, backups, PNG originales redundantes).
- La carpeta `assets/` pasó de **80 MB → 3.8 MB**.
- Todo lo borrado queda recuperable en el historial de git si se necesita.

### 2. Optimización de imágenes
- Reescaladas y recomprimidas las WebP en uso que estaban sobredimensionadas
  (logos partner a 4000-4600px → 1200px, hero `bolsas` 5340px → 1920px, etc.).
- Imágenes servidas al usuario: **2.09 MB → 0.68 MB** en las pesadas. Transparencia preservada.
- `og:image` cambiado de PNG a WebP en las páginas internas.

### 3. Mejoras SEO
- **Datos estructurados (JSON-LD):**
  - `WebSite` (señal de marca para Google / sitelinks).
  - `MeatEstablishment` por cada sucursal (San Fernando y Rancagua) con dirección de calle,
    horarios, coordenadas (geo), email, mapa y redes.
  - `BreadcrumbList` en las 6 páginas internas (clave para sitelinks).
- **Un solo `<h1>`** por página (antes la home tenía 5 por el carrusel). Se usa un `<h1 class="sr-only">`
  con palabra clave y los títulos de slides pasaron a `<h2>` (estilo idéntico vía CSS `:is(h1,h2)`).
- `sitemap.xml` con `lastmod`.
- Todo el JSON-LD validado (sintaxis correcta).

### 4. Horarios actualizados
- **San Fernando:** Lun-Vie 09:15–13:30 / 15:00–18:30 · Sáb 09:15–18:00 · Dom cerrado.
- **Rancagua:** Lun-Vie 08:30–13:30 / 15:00–17:30 · Sáb 08:30–14:00 · Dom cerrado.
- Actualizado tanto en el texto visible como en los datos estructurados.

### 5. Versionado / cache busting
- Todos los CSS y JS locales referenciados con `?v=1.0.1` en las 8 páginas.
- Versión del sistema subida a **V1.0.1** (footer).

> Todo lo anterior está **commiteado y pusheado** a `main` (publicado en sucarne.cl).

---

## ⏳ Pendientes

### Acciones que SOLO puede hacer el dueño (las más importantes para "aparecer en Google")
1. **Google Search Console** (gratis) — *esto destraba el "solo aparece 1 página":*
   - Verificar el dominio `sucarne.cl`.
   - Enviar el sitemap: `https://sucarne.cl/sitemap.xml`.
   - Inspeccionar cada página y pedir **"Solicitar indexación"**.
2. **Perfil de Empresa de Google** (Google Business Profile) para **cada sucursal**
   → es lo que pone el negocio en Google Maps y en el "pack local".
3. **Sitelinks**: Google los genera **automáticamente** una vez indexadas las páginas + tráfico de marca.
   Toma semanas/meses. El código ya da todas las señales correctas.

### Por verificar / mejoras menores de código
- [ ] **Coordenadas exactas** de las sucursales (ahora son aproximadas a nivel de cuadra).
      San Fernando: `-34.5860, -70.9885` · Rancagua: `-34.1690, -70.7420`.
      Conseguirlas con clic derecho sobre el local en Google Maps y reemplazar en `index.html`.
- [ ] **README** desactualizado: dice fuente "Inter" pero el sitio usa "Roboto"; faltan las páginas
      legales en la estructura.
- [ ] **Favicon** usa `logo_sucarne.backup.webp` (nombre "backup") — considerar un favicon dedicado.
- [ ] (Opcional) Enlaces de navegación estáticos en el HTML, ya que header/footer se inyectan por JS.

### Recordatorio de flujo: cómo actualizar sin F5
- Cambios de **texto/HTML** se actualizan solos (GitHub Pages cachea el HTML ~10 min).
- Si se cambia **CSS o JS**, subir el número `?v=` en los HTML (ej. `?v=1.0.2`) para forzar recarga.
- Si se reemplaza una **imagen con el mismo nombre**, puede quedar cacheada: usar nombre distinto.

---

## 💡 Idea en evaluación: Asistente virtual para la página

El dueño quiere agregar un **asistente virtual**. Análisis y decisión pendiente.

### Contexto técnico clave
- El sitio es **estático en GitHub Pages (sin servidor)**.
- Un asistente con **IA real** (texto libre) necesitaría un backend pequeño (Cloudflare/Vercel) para
  ocultar la API key, con **costo por mensaje + mantenimiento**, y riesgo de inventar datos.

### Opciones de tipo de asistente
1. **Botones / menú guiado (sin IA)** — *recomendado para empezar.* Gratis, sin backend, sin riesgo de
   datos errados. Responde FAQs (horarios, ofertas, sucursales, despacho) y deriva a WhatsApp.
2. **IA con Claude** — más potente (entiende cualquier pregunta) pero requiere backend + costo.
   Para precios la IA **no aporta ventaja** y suma riesgo de alucinar.
3. **Widget externo** (Tidio/Landbot/WhatsApp Business) — rápido de instalar, plan gratis limitado,
   con marca del proveedor.

### Caso difícil: preguntas por PRECIO
- La página **no tiene precios cargados** y en carnicería cambian a diario → el bot **no debe inventar**.
- **Opción A (recomendada):** el bot NO da precios; reconoce la consulta y **abre WhatsApp con el mensaje
  pre-cargado** ("Hola, quiero el precio de: ___"), eligiendo sucursal. Cero riesgo, cero mantención.
- **Opción B:** mantener una **lista corta de precios destacados** (archivo que el dueño actualiza); el bot
  la muestra con disclaimer "referenciales". Requiere actualizarla o quedan precios viejos.
- **Opción C:** mezcla (deriva a WhatsApp + lista opcional de destacados de la semana).

### ➡️ Decisión pendiente para mañana
- Elegir **tipo de asistente** (recomendado: #1 botones).
- Elegir **manejo de precios** (recomendado: Opción A, derivar a WhatsApp).
