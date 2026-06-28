document.addEventListener('DOMContentLoaded', () => {
    // --- Comportamiento mínimo, como smooth scroll u otras utilidades ---
    // (Se eliminó la generación dinámica de días de ofertas para respetar
    // exactamente el diseño y estructura visual del mockup solicitado)
    
    // Header shadow effect on scroll
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.style.boxShadow = window.scrollY > 10
                ? '0 4px 10px rgba(0,0,0,0.2)'
                : 'none';
        });
    }
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const actionsArea = document.querySelector('.actions-area');
    if (hamburger && actionsArea) {
        hamburger.addEventListener('click', () => {
            actionsArea.classList.toggle('open');
            hamburger.classList.toggle('open');

            // Posiciona el menú justo bajo el header
            if (actionsArea.classList.contains('open')) {
                const header = document.querySelector('.main-header');
                if (header) {
                    const headerBottom = header.getBoundingClientRect().bottom;
                    actionsArea.style.top = headerBottom + 'px';
                }
            }
        });
        // Close menu when a link is clicked (excepto WhatsApp que tiene su propio picker)
        actionsArea.querySelectorAll('.header-link').forEach(link => {
            link.addEventListener('click', () => {
                if (link.querySelector('.fa-whatsapp')) return;
                actionsArea.classList.remove('open');
                hamburger.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !actionsArea.contains(e.target)) {
                actionsArea.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    }

    // Iniciar el carrusel solo cuando la página lo incluye
    initializeCarousel();

    // Botón compartir (solo si el navegador soporta Web Share API)
    if (navigator.share) {
        const waContainer = document.querySelector('.wa-float-container');
        if (waContainer) {
            const shareBtn = document.createElement('button');
            shareBtn.className = 'wa-float share-float';
            shareBtn.setAttribute('aria-label', 'Compartir página');
            shareBtn.innerHTML = '<i class="fa-solid fa-share-nodes"></i><span>Compartir</span>';
            shareBtn.addEventListener('click', () => {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            });
            waContainer.prepend(shareBtn);
        }
    }

    // WhatsApp picker en el menú del header
    const waHeaderLink = [...document.querySelectorAll('.header-link')]
        .find(el => el.querySelector('.fa-whatsapp'));

    if (waHeaderLink) {
        // Crear popup
        const picker = document.createElement('div');
        picker.className = 'wa-header-picker';
        picker.innerHTML = `
            <p>¿A qué sucursal deseas escribir?</p>
            <a href="https://wa.me/56971387793" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> San Fernando</a>
            <a href="https://wa.me/56971258082" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> Rancagua</a>
        `;
        waHeaderLink.style.position = 'relative';
        waHeaderLink.appendChild(picker);

        waHeaderLink.addEventListener('click', (e) => {
            if (e.target.closest('.wa-header-picker a')) return;
            e.preventDefault();
            e.stopPropagation();
            picker.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!waHeaderLink.contains(e.target)) {
                picker.classList.remove('open');
            }
        });
    }

});

// Carousel Logic
const CAROUSEL_INTERVAL_MS = 5000;
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let slideIndex = 0;
let slideInterval = null;

function getSlides() {
    return document.querySelectorAll('.slide');
}

function showSlides(n) {
    const slides = getSlides();
    const dots = document.querySelectorAll('.dot');

    if (!slides.length) return;

    slideIndex = ((n % slides.length) + slides.length) % slides.length;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
    });

    const activeSlide = slides[slideIndex];
    // Lazy load: inyectar background-image solo cuando el slide se activa por primera vez
    if (activeSlide.dataset.bg && !activeSlide.style.backgroundImage) {
        activeSlide.style.backgroundImage = activeSlide.dataset.bg;
    }
    activeSlide.classList.add('active');

    const activeDot = dots[slideIndex];
    if (activeDot) {
        activeDot.classList.add('active');
        activeDot.setAttribute('aria-current', 'true');
    }
}

function stopCarousel() {
    if (slideInterval !== null) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

function startCarousel() {
    stopCarousel();

    if (getSlides().length < 2 || document.hidden || reducedMotionQuery.matches) return;

    slideInterval = setInterval(() => {
        showSlides(slideIndex + 1);
    }, CAROUSEL_INTERVAL_MS);
}

function moveSlide(n) {
    showSlides(slideIndex + n);
    startCarousel();
}

function currentSlide(n) {
    showSlides(n);
    startCarousel();
}

function initializeCarousel() {
    if (!getSlides().length) return;

    showSlides(slideIndex);
    startCarousel();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopCarousel();
        } else {
            startCarousel();
        }
    });

    reducedMotionQuery.addEventListener('change', startCarousel);
}

// Attach to window for onclick handlers
window.moveSlide = moveSlide;
window.currentSlide = currentSlide;
