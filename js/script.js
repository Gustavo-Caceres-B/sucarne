document.addEventListener('DOMContentLoaded', () => {
    // --- Comportamiento mínimo, como smooth scroll u otras utilidades ---
    // (Se eliminó la generación dinámica de días de ofertas para respetar
    // exactamente el diseño y estructura visual del mockup solicitado)
    
    // Header shadow effect on scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    // Initiate Carousel
    startCarousel();

    console.log("SUCARNE layout loaded");
});

// Carousel Logic
let slideIndex = 0;
let slideInterval;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlides(slideIndex);
    startCarousel();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n;
    showSlides(slideIndex);
    startCarousel();
}

function startCarousel() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000); // 5 seconds per slide
}

// Attach to window for onclick handlers
window.moveSlide = moveSlide;
window.currentSlide = currentSlide;
