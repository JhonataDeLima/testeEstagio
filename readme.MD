# Teste para Vaga de Estágio -

Este projeto foi desenvolvido como parte de um teste para uma vaga de estágio.

## Questões:

### Questão 1:

- **Descrição**: Observe o trecho de código abaixo e determine o valor da variável `SOMA` ao final do processamento:
  ```java
  int INDICE = 13, SOMA = 0, K = 0;
  Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
  Imprimir(SOMA);

### Questão 2:

- **Descrição**: Dada a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa que, informado um número, calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.


- **Importante**: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código.

### Questão 3:

- **Descrição**:  Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa que calcule e retorne:

O menor valor de faturamento ocorrido em um dia do mês;
O maior valor de faturamento ocorrido em um dia do mês;
O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
- **Importante**: Usar o JSON disponível como fonte dos dados do faturamento mensal;
Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

### Questão 4:

- **Descrição**: Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
Escreva um programa que calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

### Questão 5: Inversão de String

- **Descrição**: Escreva um programa que inverta os caracteres de uma string.
- **Importante**: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
Evite usar funções prontas, como, por exemplo, reverse.

## Arquivos

- **`index.html`**: Arquivo principal HTML que inclui a estrutura e os botões para interação.
- **`dados.json`**: Contém os dados de faturamento para análise na Questão 3.
- **`questao1.js`**: Implementa a lógica da Questão 1.
- **`questao2.js`**: Implementa a lógica da Questão 2.
- **`questao3.js`**: Implementa a lógica da Questão 3.
- **`questao4.js`**: Implementa a lógica da Questão 4.
- **`questao5.js`**: Implementa a lógica da Questão 5.

## Observações

- Certifique-se de que todos os arquivos JavaScript estão corretamente vinculados e que o arquivo `dados.json` está disponível no mesmo diretório para que a Questão 3 funcione corretamente.
- Use um servidor localpara que a Questão 3 funcione corretamente.


Espero que este README seja útil