let mes = parseInt(prompt("Ingrese el número de un mes:"));

if (mes < 1 || mes > 12) {
  alert("Valor inválido");
  throw new Error("Programa terminado");
}

if ([12, 1, 2].includes(mes)) {
  console.log("Invierno");
} else if ([3, 4, 5].includes(mes)) {
  console.log("Primavera");
} else if ([6, 7, 8].includes(mes)) {
  console.log("Verano");
} else {
  console.log("Otoño");
}

{ console.log("Jose Ricardo Montenegro Rivera 22011395");

}