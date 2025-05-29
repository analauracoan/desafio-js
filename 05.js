// QUESTÃO 05
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:24
// Data e Hora da Última Alteração: 29/05/2025, 11:34

// ENUNCIADO
// Crie uma classe chamada Pilha. Essa classe deverá ter um método chamado adicionar que deverá receber
// um nome e adicionar à Pilha e outro método chamado remover que deverá remover o último nome Pilha. A
// estrutura de dados deve funcionar como Pilha, o último registro a ser adicionado deve ser o primeiro a ser
// removido.

export class Pilha {
    constructor() {
        this.itens = [];
    }

    adicionar(nome) {
        this.itens.push(nome);
    }

    remover() {
        this.itens.pop();
    }
}