// Função para inverter a string
function inverterString(str) {
    let stringInvertida = "";
    
    // Percorre a string do último caractere até o primeiro
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// Função chamada ao clicar no botão
function inverter() {
    // Obter a string inserida no input
    const inputString = document.getElementById('entrada').value;
    
    // Inverter a string
    const stringInvertida = inverterString(inputString);
    
    // Exibir o resultado no parágrafo de saída
    document.getElementById('saida').textContent = `String invertida: ${stringInvertida}`;
}