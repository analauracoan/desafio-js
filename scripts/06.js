// QUESTÃO 06
// Autor(a): Ana Laura Coan
// Data e Hora de Criação: 29/05/2025, 10:32
// Data e Hora da Última Alteração: 29/05/2025, 11:35

// ENUNCIADO
// Crie uma classe chamada Fila. Essa classe deverá ter um método chamado adicionar que deverá receber
// um nome e adicionar à Fila e outro método chamado remover que deverá remover o último primeiro da Fila.
// A estrutura de dados deve funcionar como Fila, o primeiro registro a ser adicionado deve ser o primeiro a ser
// removido.

// RESPOSTA DO DESAFIO -------------- //
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
// -------------- //

const fila = new Fila();

function atualizaVisualizacao() {
    const filaDiv = document.getElementById('fila');
    filaDiv.innerHTML = '';

    if (fila.itens.length === 0) {
        filaDiv.innerHTML = "<p><em>Fila vazia.</em></p>";
        return;
    }

    for (let i = 0; i < fila.itens.length; i++) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = fila.itens[i];
        filaDiv.appendChild(div);
    }
}

function adicionaNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();
    if (nome) {
        fila.adicionar(nome);
        nomeInput.value = '';
        atualizaVisualizacao();
    }
}

function removeNome() {
    fila.remover();
    atualizaVisualizacao();
}

atualizaVisualizacao();