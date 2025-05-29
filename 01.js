// QUESTÃO 01
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 09:46
// Data e Hora da Última Alteração: 00/00/0000, 00:00

// ENUNCIADO
// Faça uma função que receba um número inteiro (entre 0 e 9999) e escreva no console o número recebido
// por extenso.
// Exemplo: 1500 => um mil e quinhentos

function escreveNumeroPorExtenso(numero) {
    if (numero < 0 || numero > 9999) {
        console.log("Número fora do intervalo permitido (0 a 9999).");
        return;
    }

    const unidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenas = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    if (numero === 0) {
        console.log("zero");
        return;
    }

    let partes = [];

    const milhar = Math.floor(numero / 1000);
    const centena = Math.floor((numero % 1000) / 100);
    const dezena = Math.floor((numero % 100) / 10);
    const unidade = numero % 10;

    if (milhar > 0) {
        if (milhar === 1 && centena === 0 && dezena === 0 && unidade === 0) {
            partes.push("mil");
        } else if (milhar === 1) {
            partes.push("um mil");
        } else {
            partes.push(`${unidades[milhar]} mil`);
        }
    }

    if (centena > 0) {
        if (centena === 1 && dezena === 0 && unidade === 0) {
            partes.push("cem");
        } else {
            partes.push(centenas[centena]);
        }
    }

    if (dezena === 1 && unidade > 0) {
        partes.push(especiais[unidade]);
    } else {
        if (dezena > 0) {
            partes.push(dezenas[dezena]);
        }
        if (unidade > 0 && dezena !== 1) {
            partes.push(unidades[unidade]);
        }
    }

    let resultado = "";
    for (let i = 0; i < partes.length; i++) {
        resultado += partes[i];
        if (i < partes.length - 1) {
            resultado += " e ";
        }
    }

    console.log(resultado);
}
