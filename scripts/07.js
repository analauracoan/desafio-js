// QUESTÃO 07
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:38
// Data e Hora da Última Alteração: 29/05/2025, 11:36

// ENUNCIADO
// Faça um algoritimo que, dado um array de inteiros, e um número objetivo, retorne os index de dois números
// dentro desse array, que se adicionados resultam nesse objetivo.

// RESPOSTA DO DESAFIO -------------- //
function encontraSomaDeObjetivo(array, objetivo) {
    const mapa = {};

    for (let i = 0; i < array.length; i++) {
        const complemento = objetivo - array[i];

        if (mapa.hasOwnProperty(complemento)) {
            return ([mapa[complemento], i]);
        }
        mapa[array[i]] = i;
    }

    return null;
}
// -------------- //

function buscaIndices() {
    const arrayStr = document.getElementById('arrayInput').value;
    const objetivo = parseInt(document.getElementById('objetivoInput').value, 10);

    if (!arrayStr || isNaN(objetivo)) {
        document.getElementById('resultado').textContent = "Preencha os dois campos corretamente.";
        return;
    }

    const array = arrayStr.split(',').map(n => parseInt(n.trim(), 10));

    const resultado = encontraSomaDeObjetivo(array, objetivo);

    if (resultado) {
        document.getElementById('resultado').textContent = `Índices encontrados: ${resultado[0]} e ${resultado[1]}`;
    } else {
        document.getElementById('resultado').textContent = "Nenhuma combinação encontrada.";
    }
}