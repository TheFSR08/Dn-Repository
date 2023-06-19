// Función para verificar si se ha llegado al final de la página
function llegoAlFinal() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
  
  // Función para cargar más contenido
  function cargarContenido() {
    // Realizar una solicitud AJAX o cargar más contenido dinámicamente
    // Aquí podria agregar mi propia lógica para cargar más contenido en la página
  }
  
  // Evento de desplazamiento
  window.onscroll = function() {
    if (llegoAlFinal()) {
      cargarContenido();
    }
  };