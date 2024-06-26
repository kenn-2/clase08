function calcular() {
  let numero = document.getElementById('numero').value.trim(); // Obtener el valor y eliminar espacios al inicio y final
  if (numero === '') {
    alert('Por favor ingresa un número.');
    return;
  }

  // Verificar si el valor ingresado es un número
  if (isNaN(numero)) {
    alert('El valor ingresado no es un número válido.');
    return;
  }

  numero = parseInt(numero);
  let resultadoElemento = document.getElementById('resultado');
  if (numero === 0) {
    resultadoElemento.textContent = 'Cero';
  } else if (numero > 0) {
    resultadoElemento.textContent = 'El número ingresado es Positivo';
  } else {
    resultadoElemento.textContent = 'El número ingresado es Negativo';
  }
}

function limpiar() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').textContent = '';
}
