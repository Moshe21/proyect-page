// Función para alternar la visibilidad del dropdown de objetivos generales
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Función para alternar la visibilidad del dropdown de objetivos específicos
function toggleSpecificDropdown() {
    var dropdownContent = document.getElementById("dropdown-specific-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Función para mostrar la ventana modal con el contenido especificado
function showModal(title, content) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modal-title");
    var modalContent = document.getElementById("modal-content");

    modal.style.display = "block"; // Mostrar la modal
    modalTitle.innerText = title; // Establecer el título de la modal
    modalContent.innerText = content; // Establecer el contenido de la modal
}

// Función para cerrar la ventana modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Ocultar la modal
}

// Cerrar la modal cuando se hace clic fuera de ella
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Cerrar la modal cuando se presiona la tecla 'Esc'
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
};
<script>
    // Función para alternar la visibilidad del acordeón
    function toggleAccordion(button) {
        var content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    }
</script>