// QUESTÃO 06
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:32
// Data e Hora da Última Alteração: 00/00/0000, 00:00

// ENUNCIADO
// Crie uma classe chamada Fila. Essa classe deverá ter um método chamado adicionar que deverá receber
// um nome e adicionar à Fila e outro método chamado remover que deverá remover o último primeiro da Fila.
// A estrutura de dados deve funcionar como Fila, o primeiro registro a ser adicionado deve ser o primeiro a ser
// removido.

class Fila {
    constructor() {
        this.itens = [];
    }

    adicionar(nome) {
        this.itens.push(nome);
    }

    remover() {
        this.itens.shift();
    }
}