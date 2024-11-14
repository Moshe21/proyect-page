// Variables para el carrusel
let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder en el carrusel
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar la diapositiva actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función para mostrar las diapositivas
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

// Función para mostrar y ocultar el menú móvil
function toggleMenu() {
    var nav = document.getElementById('nav-mobile');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}