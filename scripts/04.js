// QUESTÃO 04
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:11
// Data e Hora da Última Alteração: 29/05/2025, 11:26

// ENUNCIADO
// Criar uma função que realiza o cálculo do IMC, a função deve receber dois parâmetros, altura e peso e
// retornar o IMC seguido da respectiva classificação. O IMC é calculado com PESO / ALTURA².

// RESPOSTA DO DESAFIO -------------- //
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc <= 18.4) {
    return "Abaixo do peso.";
  } else if (imc <= 24.9) {
    return "Peso normal.";
  } else if (imc <= 29.9) {
    return "Acima do peso";
  } else {
    return "Obeso";
  }
}
// -------------- //

function calcula() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
    return;
  }

  const resultado = calculaIMC(peso, altura);
  document.getElementById("resultado").textContent = resultado;
}