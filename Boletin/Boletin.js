let notas = [7, 4, 8, 9, 6];

function listarNotas() {
  let lista = document.getElementById("notas");
  for (let i = 0; i < notas.length; i++) {
    let item = document.createElement("li"); 
    item.textContent = notas[i];  
  }
}

function calcularPromedio() {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i]; 
  }
  let promedio = suma / notas.length; 
  let resultado = document.getElementById("resultado");
  resultado.textContent = "El promedio de notas es: " + promedio;
}

function notaMasAlta() {
  let mayor = notas[0]; 
  for (let i = 1; i < notas.length; i++) {
    if (notas[i] > mayor) {
      mayor = notas[i]; 
    }
  }
  let resultado = document.getElementById("resultado");
  resultado.textContent = "La nota más alta es: " + mayor;
}

function hayAplazados() {
  let hay = false; 
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 4) {
      hay = true; 
    }
  }
  let resultado = document.getElementById("resultado");
  if (hay == true) {
    resultado.textContent = "Sí hay aplazados (notas menores a 4)";
  } else {
    resultado.textContent = "No hay aplazados";
  }
}




