// Configuración de la cuenta regresiva
var countdownDate = new Date("2023-12-31T23:59:59").getTime(); // Fecha objetivo en formato ISO 8601

// Actualizar la cuenta regresiva cada segundo
var countdownElement = document.getElementById("countdown");

var countdownInterval = setInterval(function() {
  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha objetivo y la fecha actual
  var timeRemaining = countdownDate - now;

  // Calculo horas, minutos y segundos restantes
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Formateo los valores para que siempre tengan dos dígitos
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  // Muestro la cuenta regresiva en el elemento HTML
  countdownElement.textContent = hours + ":" + minutes + ":" + seconds;

  // Si la cuenta regresiva ha terminado, detengo el intervalo
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "¡Tiempo terminado!";
  }
}, 1000);