// QUESTÃO 02
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 09:57
// Data e Hora da Última Alteração: 00/00/0000, 00:00

// ENUNCIADO
// Faça uma função que receba um array de números inteiros e um número inteiro. A função deverá retornar
// se o número passado está informado no array e se sim, em que posição.

function retornaArray(array, pesquisa) {
  const posicao = array.indexOf(pesquisa);
  if (posicao > 0) {
    console.log(`O número está presente na posição: ${posicao}`);
  } else {
    console.log('o número não existe no array');
  }
}