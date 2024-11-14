// script4.js

// Función para alternar el menú en dispositivos móviles
function toggleMenu() {
    const navMobile = document.getElementById('nav-mobile');
    if (navMobile.style.display === 'none' || navMobile.style.display === '') {
        navMobile.style.display = 'block'; // Mostrar el menú
    } else {
        navMobile.style.display = 'none'; // Ocultar el menú
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Ocultar el modal
}

// Evento para cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Ejemplo de función para abrir un modal (opcional)
function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block'; // Mostrar el modal
}

// Si tienes un botón para abrir el modal, asegúrate de agregar un evento
document.getElementById('openModalButton').addEventListener('click', openModal);