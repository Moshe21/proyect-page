// Función para abrir el menú móvil (hamburguesa)
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("nav-mobile").style.display = "block"; // Muestra el menú móvil
});

document.getElementById("close-mobile").addEventListener("click", function () {
  document.getElementById("nav-mobile").style.display = "none"; // Cierra el menú móvil
});

// Función para abrir el WhatsApp con el mensaje del formulario
function sendWhatsAppMessage(event) {
  event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nAsunto: ${subject}\nMensaje: ${message}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const phoneNumber = "3027247457"; // Cambiar por el número adecuado
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  window.open(whatsappLink, "_blank"); // Abre WhatsApp con el mensaje preformateado
}

// Activar AOS para las animaciones
AOS.init();

// Menú desplegable
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    e.stopPropagation(); // Evita que el clic se propague al documento
    this.classList.toggle('open'); // Añade o elimina la clase "open" para mostrar/ocultar
  });
});

// Cerrar todos los menús cuando el usuario haga clic fuera
document.addEventListener('click', function (e) {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open'); // Cierra el menú si el clic es fuera
    }
  });
});
