// QUESTÃO 02
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 09:57
// Data e Hora da Última Alteração: 29/05/2025, 12:44

// ENUNCIADO
// Faça uma função que receba um array de números inteiros e um número inteiro. A função deverá retornar
// se o número passado está informado no array e se sim, em que posição.

function encontraNumeroEPosicao(array, pesquisa) {
  const posicao = array.indexOf(pesquisa);
  if (posicao >= 0) {
    return `O número está presente na posição: ${posicao}`;
  } else {
    return "o número não existe no array";
  }
}

function verificaNumeroNoArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  const numeroInput = parseInt(document.getElementById("numeroInput").value, 10);

  const array = arrayInput.split(",").map(num => parseInt(num.trim(), 10));

  const resultado = encontraNumeroEPosicao(array, numeroInput);
  document.getElementById("resultado").textContent = resultado;
}