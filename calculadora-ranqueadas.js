function calcularNivel(vitórias, derrotas) {
  // Calcular o saldo de vitórias
  const saldoVitorias = vitórias - derrotas;
  
  // Determinar o nível baseado na quantidade de vitórias
  let nivel;
  
  if (vitórias < 10) {
    nivel = "Ferro";
  } else if (vitórias >= 11 && vitórias <= 20) {
    nivel = "Bronze";
  } else if (vitórias >= 21 && vitórias <= 50) {
    nivel = "Prata";
  } else if (vitórias >= 51 && vitórias <= 80) {
    nivel = "Ouro";
  } else if (vitórias >= 81 && vitórias <= 90) {
    nivel = "Diamante";
  } else if (vitórias >= 91 && vitórias <= 100) {
    nivel = "Lendário";
  } else if (vitórias >= 101) {
    nivel = "Imortal";
  }
  
  // Retornar a mensagem formatada
  return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// Exemplos de uso:
console.log(calcularNivel(5, 2));      // Ferro
console.log(calcularNivel(15, 3));     // Bronze
console.log(calcularNivel(35, 10));    // Prata
console.log(calcularNivel(60, 15));    // Ouro
console.log(calcularNivel(85, 20));    // Diamante
console.log(calcularNivel(95, 5));     // Lendário
console.log(calcularNivel(105, 25));   // Imortal