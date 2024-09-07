// Função que calcula o faturamento a partir de um array de dados
function calcularFaturamento(dados) {
    // Extrai o valor de faturamento de cada item no array 'dados'
    let valores = dados.map(item => item.valor);

    // Encontra o menor valor de faturamento que é maior que zero
    // Filtra valores maiores que zero antes de aplicar Math.min
    let menorFaturamento = Math.min(...valores.filter(valor => valor > 0)); 
    
    // Encontra o maior valor de faturamento entre todos os valores
    let maiorFaturamento = Math.max(...valores);

    // Calcula o total de faturamento somando todos os valores
    let totalFaturamento = valores.reduce((acc, val) => acc + val, 0);
    
    // Conta o número de dias com faturamento maior que zero
    let diasComFaturamento = valores.filter(valor => valor > 0).length;
    
    // Calcula a média de faturamento dividindo o total pelo número de dias com faturamento
    let mediaFaturamento = totalFaturamento / diasComFaturamento;

    // Conta o número de dias com faturamento acima da média
    let diasAcimaDaMedia = valores.filter(valor => valor > mediaFaturamento).length;

    // Atualiza o conteúdo do elemento HTML com id 'menor' com o menor valor de faturamento
    document.getElementById('menor').innerText = `Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`;
    
    // Atualiza o conteúdo do elemento HTML com id 'maior' com o maior valor de faturamento
    document.getElementById('maior').innerText = `Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`;
    
    // Atualiza o conteúdo do elemento HTML com id 'diasAcimaMedia' com o número de dias acima da média
    document.getElementById('diasAcimaMedia').innerText = `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`;
}

// Função que carrega os dados do arquivo JSON e chama a função de cálculo
function carregarDados() {
    // Faz uma requisição para buscar o arquivo JSON 'dados.json'
    fetch('dados.json')
        .then(response => response.json()) // Converte a resposta para JSON
        .then(dados => calcularFaturamento(dados)) // Chama a função de cálculo com os dados carregados
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error)); // Trata possíveis erros
}

// Função auxiliar para adicionar eventos ao carregamento da página
function addLoadEvent(func) {
    // Guarda a função antiga de window.onload, se houver
    const oldOnload = window.onload;
    
    // Se não houver uma função antiga, define a nova função diretamente
    if (typeof oldOnload !== 'function') {
        window.onload = func;
    } else {
        // Se já houver uma função, empilha a nova função após a antiga
        window.onload = function() {
            oldOnload();
            func();
        };
    }
}

// Adiciona a função carregarDados ao evento de carregamento da página
addLoadEvent(carregarDados);