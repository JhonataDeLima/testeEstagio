// Função que verifica se o número 'i' pertence à sequência de Fibonacci
function fibonacci(i) {
    // Declaração das variáveis iniciais para os dois primeiros números da sequência de Fibonacci
    let a = 0, b = 1;
    
    // Loop que continua enquanto 'b' for menor que 'i'
    // O loop vai gerar os próximos números da sequência até que 'b' seja maior ou igual a 'i'
    while (b < i) {
        // Calcula o próximo número da sequência como a soma dos dois anteriores
        let prox = a + b;
        // Atualiza as variáveis: 'a' recebe o valor de 'b' e 'b' recebe o valor de 'prox'
        a = b;
        b = prox;
    }
    
    // Após o loop, verifica se o número 'i' é igual a 'b' (um número da sequência) ou se 'i' é 0
    if (b === i || i === 0) {
        // Retorna uma mensagem indicando que o número pertence à sequência de Fibonacci
        return `O número ${i} pertence à sequência de Fibonacci.`;
    } else {
        // Retorna uma mensagem indicando que o número NÃO pertence à sequência de Fibonacci
        return `O número ${i} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Função que captura o valor digitado no input e exibe o resultado
function checarNum() {
    // Obtém o valor digitado pelo usuário no campo de input com id 'numInput'
    let input = document.getElementById('numInput').value;
    
    // Converte o valor para um número inteiro e chama a função 'fibonacci' com esse número
    let result2 = fibonacci(parseInt(input));
    
    // Exibe o resultado retornado pela função 'fibonacci' no elemento HTML com id 'result2'
    document.getElementById('result2').innerText = result2;
}