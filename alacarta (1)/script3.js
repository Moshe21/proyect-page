// Función para alternar el menú móvil
function toggleMenu() {
    var nav = document.getElementById('nav-mobile');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

// Función para abrir un modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Función para cerrar un modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Inicialización de ScrollReveal para animaciones
document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal('.reveal', {
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 200 // Intervalo entre animaciones
    });
});

// Cerrar el modal al hacer clic en la "X"
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        var modal = closeButton.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}