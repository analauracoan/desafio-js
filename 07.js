// QUESTÃO 07
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:38
// Data e Hora da Última Alteração: 29/05/2025, 11:36

// ENUNCIADO
// Faça um algoritimo que, dado um array de inteiros, e um número objetivo, retorne os index de dois números
// dentro desse array, que se adicionados resultam nesse objetivo.

export function encontraSomaDeObjetivo(array, objetivo) {
    const mapa = {};

    for (let i = 0; i < array.length; i++) {
        const complemento = objetivo - array[i];

        if (mapa.hasOwnProperty(complemento)) {
            return ([mapa[complemento], i]);
        }
        mapa[array[i]] = i;
    }
}
