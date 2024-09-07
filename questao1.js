// Declaração das variáveis
let INDICE = 13, SOMA = 0, K = 0;

// Laço de repetição que continuará enquanto K for menor que INDICE (13)
while(K < INDICE){
    // Incrementa o valor de K em 1 a cada iteração
    K = K + 1; 
    
    // Soma o valor atual de K à variável SOMA
    SOMA = SOMA + K;

    // Se o valor de K for igual ao INDICE (13), executa o código abaixo
    if(K === INDICE){
       // Cria uma constante com a string que contém o valor final da SOMA
       const result1 = `O Valor de Soma é: ${SOMA}.`;
       
       // Insere o valor da soma no elemento HTML com id 'result1'
       document.getElementById('result1').innerText = result1;
    }
}