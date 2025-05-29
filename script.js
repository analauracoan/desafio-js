function converter() {
    const input = document.getElementById("numeroInput").value;
    const numero = parseInt(input, 10);
    const resultado = escreveNumeroPorExtenso(numero);
    document.getElementById("resultado").textContent = resultado;
}