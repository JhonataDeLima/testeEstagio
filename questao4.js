// Função que calcula e exibe a participação percentual de cada estado no faturamento total
function calcularParticipacao() {
    // Objeto que contém o faturamento por estado
    const faturamento = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    // Calcula o faturamento total somando todos os valores no objeto 'faturamento'
    const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    // Objeto para armazenar a participação percentual de cada estado
    const participacao = {};

    // Calcula a participação percentual de cada estado
    for (let estado in faturamento) {
        participacao[estado] = (faturamento[estado] / totalFaturamento) * 100;
    }

    // Obtém o elemento HTML com id 'resultado' onde os resultados serão exibidos
    let resultado = document.getElementById('resultado');
    
    // Limpa o conteúdo atual do elemento para garantir que só exiba o resultado atualizado
    resultado.innerHTML = '';

    // Itera sobre o objeto 'participacao' e exibe a participação de cada estado
    for (let estado in participacao) {
        // Adiciona um parágrafo ao elemento HTML com o nome do estado e a sua participação percentual
        resultado.innerHTML += `<p>${estado}: ${participacao[estado].toFixed(2)}%</p>`;
    }
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

// Adiciona a função calcularParticipacao ao evento de carregamento da página
addLoadEvent(calcularParticipacao);