---
comments: true
---

# Exercícios sobre funções

#### Exercício 01

Faça um programa para imprimir:

```
1
2   2
3   3   3
.....
n   n   n   n   n   n  ... n
```

para um `n` informado pelo usuário. Use uma função que receba um valor `n` inteiro e imprima até a n-ésima linha.

```pyodide
```

#### Exercício 02

Faça um programa para imprimir:

```
1
1   2
1   2   3
.....
1   2   3   ...  n
```

para um `n` informado pelo usuário. Use uma função que receba um valor `n` inteiro imprima até a n-ésima linha.


#### Exercício 03

Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.

```pyodide
```

#### Exercício 04

Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere `P`, se seu argumento for positivo, e `N`, se seu argumento for zero ou negativo.

```pyodide
```

#### Exercício 05

Faça um programa com uma função chamada `soma_imposto`. A função possui dois parâmetros formais: `taxa_imposto`, que é a quantia de imposto sobre vendas expressa em porcentagem e `custo`, que é o custo de um item antes do imposto. A função "altera" o valor de custo para incluir o imposto sobre vendas.

```pyodide
```

#### Exercício 06

Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.

```pyodide
```

#### Exercício 07

Faça um programa que use a função `valor_pagamento` para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função `valor_pagamento`, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.

```pyodide
```

#### Exercício 08

Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.

```pyodide
```

#### Exercício 09

Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: `127` -> `721`.

```pyodide
```

#### Exercício 10

Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.

```pyodide
```

#### Exercício 11

Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de `mes_por_extenso` de AAAA. Opcionalmente, valide a data e retorne `#!python None` caso a data seja inválida.

```pyodide
```

#### Exercício 12

Embaralha palavra. Construa uma função que receba uma string como parâmetro e devolva outra string com os carateres embaralhados. Por exemplo: se função receber a palavra python, pode retornar npthyo, ophtyn ou qualquer outra combinação possível, de forma aleatória. Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados.

```pyodide
```

#### Exercício 13

Desenha moldura. Construa uma função que desenhe um retângulo usando os caracteres ‘+’ , ‘−’ e ‘| ‘. Esta função deve receber dois parâmetros, linhas e colunas, sendo que o valor por omissão é o valor mínimo igual a 1 e o valor máximo é 20. Se valores fora da faixa forem informados, eles devem ser modificados para valores dentro da faixa de forma elegante.

```pyodide
```

#### Exercício 14

Quadrado mágico. Um quadrado mágico é aquele dividido em linhas e colunas, com um número em cada posição e no qual a soma das linhas, colunas e diagonais é a mesma. Por exemplo, veja um quadrado mágico de lado 3, com números de 1 a 9:

```
8  3  4
1  5  9
6  7  2
```

Elabore uma função que identifica e mostra na tela todos os quadrados mágicos com as características acima. Dica: produza todas as combinações possíveis e verifique a soma quando completar cada quadrado. Usar um vetor de 1 a 9 parece ser mais simples que usar uma matriz 3x3.

```pyodide
```
