// Función para mostrar el precio según el producto seleccionado
function mostrarPrecio() {
    var producto = document.getElementById("producto").value;
    var precio;
  
    switch (producto) {
        case "arroz":
            precio = 4.50;
            break;
        case "azucar":
            precio = 6.20;
            break;
        case "chocolate":
            precio = 1.20;
            break;
        case "aceite":
            precio = 12.50;
            break;
        default:
            precio = 0;
    }
  
    // Mostrar el precio en la interfaz
    document.getElementById("precio").textContent = "Precio: S/ " + precio.toFixed(2);
  }
  
  // Función para calcular el importe según la cantidad y el descuento
  function calcularImporte() {
    var producto = document.getElementById("producto").value;
  
    // Verificar si se ha seleccionado un producto
    if (producto.trim() === "") {
      alert("Por favor, seleccione un producto antes de calcular el importe.");
      return;
    }
  
    var cantidad = document.getElementById("cantidad").value;
    var descuento = document.getElementById("descuento").value;
    var precio;
  
    // Validar que cantidad y descuento sean números
    if (isNaN(cantidad) || cantidad.trim() === "") {
        alert("Por favor, ingrese un número válido para la cantidad.");
        return;
    }
  
    if (isNaN(descuento) || descuento.trim() === "") {
        alert("Por favor, ingrese un número válido para el descuento.");
        return;
    }
  
    cantidad = parseInt(cantidad);
    descuento = parseInt(descuento);
  
    switch (producto) {
        case "arroz":
            precio = 4.50;
            break;
        case "azucar":
            precio = 6.20;
            break;
        case "chocolate":
            precio = 1.20;
            break;
        case "aceite":
            precio = 12.50;
            break;
        default:
            precio = 0;
    }
  
    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor a 0.");
        return;
    }
  
    if (descuento < 0) {
        alert("El descuento no puede ser menor que 0.");
        return;
    }
  
    var importeSoles = cantidad * precio - (cantidad * precio * descuento) / 100;
    var importeDolares = importeSoles / 3.8;
  
    // Mostrar el resultado en la interfaz
    document.getElementById("importeSoles").textContent = "Importe en Soles: S/ " + importeSoles.toFixed(2);
    document.getElementById("importeDolares").textContent = "Importe en Dólares: $ " + importeDolares.toFixed(2);
  }
  
  // Función para limpiar los campos y resultados
  function limpiar() {
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "1";
    document.getElementById("descuento").value = "0";
    document.getElementById("precio").textContent = "Precio: ";
    document.getElementById("importeSoles").textContent = "";
    document.getElementById("importeDolares").textContent = "";
  }
  
  // Asociar la función mostrarPrecio al evento change del select de producto
  document.getElementById("producto").addEventListener("change", function() {
    mostrarPrecio();
  });
  
  // Asociar la función calcularImporte al evento click del botón de calcular
  document.getElementById("calcularButton").addEventListener("click", function() {
    calcularImporte();
  });
  
  
  