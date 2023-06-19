// Obtener referencia al elemento de entrada de archivos
var audioFileInput = document.getElementById("audioFile");

// Escuchar el evento de cambio en el elemento de entrada de archivos
audioFileInput.addEventListener("change", function(event) {
  // Obtener el archivo de audio seleccionado
  var audioFile = event.target.files[0];

  // Crear objeto FileReader para leer el archivo de audio
  var reader = new FileReader();

  reader.onload = function(event) {
    // Decodificar el archivo de audio
    var audioData = event.target.result;
    decodeAudioData(audioData);
  };

  reader.readAsArrayBuffer(audioFile);
});

// Decodificar los datos de audio y obtener muestras
function decodeAudioData(audioData) {
  // Crear contexto de audio
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Decodificar los datos de audio
  audioContext.decodeAudioData(audioData, function(decodedData) {
    // Obtener las muestras de audio
    var audioSamples = decodedData.getChannelData(0); // Canal izquierdo para audio mono

    // Realizar algún procesamiento en las muestras de audio
    var result = processAudioSamples(audioSamples);

    // Mostrar el resultado
    var resultElement = document.getElementById("result");
    resultElement.textContent = "El resultado es: " + result;
  });
}

// Realizar procesamiento en las muestras de audio
function processAudioSamples(samples) {
  // Ejemplo de procesamiento: calcular el valor promedio de las muestras
  var sum = samples.reduce(function(acc, sample) {
    return acc + sample;
  }, 0);
  var average = sum / samples.length;

  return average;
}
