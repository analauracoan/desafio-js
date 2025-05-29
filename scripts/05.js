// QUESTÃO 05
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:24
// Data e Hora da Última Alteração: 29/05/2025, 11:34

// ENUNCIADO
// Crie uma classe chamada Pilha. Essa classe deverá ter um método chamado adicionar que deverá receber
// um nome e adicionar à Pilha e outro método chamado remover que deverá remover o último nome Pilha. A
// estrutura de dados deve funcionar como Pilha, o último registro a ser adicionado deve ser o primeiro a ser
// removido.

// RESPOSTA DO DESAFIO -------------- //
class Pilha {
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
// -------------- //

const pilha = new Pilha();

function atualizarVisualizacao() {
    const pilhaDiv = document.getElementById('pilha');
    pilhaDiv.innerHTML = '';

    if (pilha.itens.length === 0) {
        pilhaDiv.innerHTML = "<p><em>Pilha vazia.</em></p>";
        return;
    }

    for (let i = pilha.itens.length - 1; i >= 0; i--) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = pilha.itens[i];
        pilhaDiv.appendChild(div);
    }
}

function adicionarNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();
    if (nome) {
        pilha.adicionar(nome);
        nomeInput.value = '';
        atualizarVisualizacao();
    }
}

function removerNome() {
    pilha.remover();
    atualizarVisualizacao();
}

atualizarVisualizacao();