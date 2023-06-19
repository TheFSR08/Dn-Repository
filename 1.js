var ingresos = [1000, 1500, 2000, 500, 300];

// Función para sumar los ingresos
function sumarIngresos(ingresos) {
  var suma = 0;
  for (var i = 0; i < ingresos.length; i++) {
    suma += ingresos[i];
  }
  return suma;
}

// Llamada a la función para obtener la suma de los ingresos
var totalIngresos = sumarIngresos(ingresos);

console.log("La suma de los ingresos es: " + totalIngresos);