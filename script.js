// Lógica para el menú hamburguesa
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // Para la animación de la X
        console.log('Hamburger menu clicked. navLinks active class:', navLinks.classList.contains('active')); // Línea de depuración
    });
}

// Lógica para el texto dinámico en el encabezado
const dynamicTextElement = document.getElementById('dynamic-text');
const phrases = [
    "Compra rápido y sin errores",
    "Envío hasta tu casa en 3 horas, ¡qué locura! 🏍️",
    "Pago contraentrega"
];
let currentPhraseIndex = 0;

function updateDynamicText() {
    dynamicTextElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        dynamicTextElement.textContent = phrases[currentPhraseIndex];
        dynamicTextElement.style.opacity = 1; // Fade in
    }, 500); // Duración del fade out
}

if (dynamicTextElement) {
    setInterval(updateDynamicText, 3000); // Cambia cada 3 segundos
}

// Lógica para el efecto 3D de las tarjetas de producto en la página de inicio
const productCards = document.querySelectorAll('.product-card');
if (productCards.length > 0) {
    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Lógica para la página de producto (si aplica)
document.addEventListener('DOMContentLoaded', () => {
    // Intro Screen Logic
    const introScreen = document.getElementById('intro-screen');
    if (introScreen) {
        setTimeout(() => {
            introScreen.classList.add('fade-out');
            setTimeout(() => {
                introScreen.classList.add('hidden');
            }, 1000); // Duración de la animación de estallido + fade-out
        }, 2000); // Muestra la pantalla de intro por 2 segundos
    }

    // Galería de imágenes
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Cambiar la imagen principal
                mainImage.src = this.src;

                // Actualizar la clase activa
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Pestañas de información
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function() {
                const tabId = this.dataset.tab;

                // Ocultar todos los contenidos
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });

                // Desactivar todos los enlaces
                tabLinks.forEach(l => {
                    l.classList.remove('active');
                });

                // Activar el contenido y el enlace seleccionados
                document.getElementById(tabId).classList.add('active');
                this.classList.add('active');
            });
        });
    }

    // Lógica del Pop-up Promocional
    const promoPopup = document.getElementById('promo-popup');
    const closePopupBtn = document.getElementById('close-popup');

    if (promoPopup) {
        // Mostrar el pop-up después de 29 segundos
        setTimeout(() => {
            promoPopup.classList.add('visible');
        }, 29000); // 29 segundos

        // Cerrar el pop-up al hacer clic en la 'x'
        closePopupBtn.addEventListener('click', () => {
            promoPopup.classList.remove('visible');
        });

        // Cerrar el pop-up al hacer clic fuera del contenido
        promoPopup.addEventListener('click', (event) => {
            if (event.target === promoPopup) {
                promoPopup.classList.remove('visible');
            }
        });
    }
});