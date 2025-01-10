---
comments: true
---

# Estrutura sequencial

#### Exercício 01

Faça um programa que mostre a mensagem `#!py "Alo mundo"` na tela:


=== "Código"
	```exercice { test="test_01" }
	```

=== "Resposta"
	```python
	print('Alo mundo')
	```

#### Exercício 02

Faça um programa que peça um número e então mostre a mensagem `#!py "O número informado foi [número]"`:

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	número = input('Digite um número: ')
	print(f'O número informado foi {número}')
	```

#### Exercício 03

Faça um programa que peça dois números e imprima a soma:

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	número_1 = float(input('Digite um número: '))
	número_2 = float(input('Digite um número: '))
	print(número_1 + número_2)
	```

#### Exercício 04

Faça um programa que peça as 4 notas bimestrais e mostre a média. 

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	nota_1 = float(input('Digite a nota 1: '))
	nota_2 = float(input('Digite a nota 2: '))
	nota_3 = float(input('Digite a nota 3: '))
	nota_4 = float(input('Digite a nota 4: '))
	média = (nota_1 + nota_2 + nota_3 + nota_4) / 4
	print(f'Média {média}')
	```

#### Exercício 05

Faça um programa que converta metros para centímetros:

=== "Código"
	```pyodide
	```
=== "Resposta"
	```pyodide
	metros = float(input('Entre com os métros: '))
	centimentros = metros * 100
	print(f'{metros} metros são {centimentros} em centímetros.')
	```

#### Exercício 06

Faça um programa que peça o raio de um círculo, calcule e mostre sua área:

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	raio = float(input('Entre com o raio: '))
	área = (raio ** 2) * 3.14
	print(f'A área de círculo com raio {raio} é: {área}')
	```

#### Exercício 07

Faça um programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

=== "Código"
	```pyodide
	```
=== "Resposta"
	```pyodide
	lado = float(input('Entre com a medida do lado: '))
	área = lado ** 2
	print(f'A área de um quadrado de lado {lado} é: {área}')
	```

#### Exercício 08

Faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

=== "Código"
	```pyodide
	```
=== "Resposta"
	```pyodide
	valor_hora = float(input('Quanto você ganha por hora: '))
	horas_mes = float(input('Quantas horas trbalhou esse mês: '))
	salário = valor_hora * horas_mes
	print(f'O salário deste mês será: {salário}')
	```

#### Exercício 09

Faça um programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.

```math title="Formula"
C = 5 * ((F-32) / 9).
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	f = float(input('Digite a temperatura em fahrenheit: '))
	c = 5 * ((f - 32) / 9)
	print(f'{f} em celsius é: {c}')
	```

#### Exercício 10

Faça um programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

```math title="Formula"
F = (C * 9/5) + 32
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	c = float(input('Digite a temperatura em celsius: '))
	f = (c * 9 / 5) + 32
	print(f'{c} em fahrenheit é: {f}')
	```

#### Exercício 11

Faça um programa que peça 2 números inteiros e um número real. Calcule e mostre:

- O produto do dobro do primeiro com metade do segundo .
- A soma do triplo do primeiro com o terceiro.
- O terceiro elevado ao cubo.

=== "Código"
	```pyodide
	```
=== "Resposta"
	```pyodide
	int_1 = int(input('Digite um número inteiro: '))
	int_2 = int(input('Digite outro número inteiro: '))
	real = float(input('Digite um número real: '))

	print(f'O produto do dobro do primeiro com a metade do segundo: {(int_1 * 2) * (int_2 / 2)}')
	print(f'A soma do triplo do primeiro com o terceiro: {(int_1 * 3) + real}')
	print(f'O terceiro elevado ao cubo: {real ** 3}')
	```

#### Exercício 12

Tendo como dados de entrada um arquivo em Gigabytes, construa um algoritmo que faça a conversão para Megabytes, usando a seguinte fórmula:

```math title="Formula"
Gigabytes * 1024
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	tamanho_gb = float(input('Digite o tamanho do arquivo em GBs: '))
	tamanho_mb = tamanho_gb * 1_024
	print(f'O arquivo tem {tamanho_mb} MBs')
	```

#### Exercício 13

Tendo como dados de entrada um arquivo em Gigabytes, construa um algoritmo que faça a conversão para Megabytes e Kilobytes, usando as seguintes fórmulas:

- Para Megabytes: `Gigabytes * 1024`
- Para Kilobytes: `Gigabytes * 1024 * 1024`

Responda o tamanho do arquivo em Megabytes e o tamanho em Kilobytes.

=== "Código"
	```pyodide
	```
=== "Resposta"
	```pyodide
	tamanho_gb = float(input('Digite o tamanho do arquivo em GBs: '))
	tamanho_mb = tamanho_gb * 1_024
	tamanho_kb = tamanho_gb * 1_024 * 1_024
	print(f'O arquivo tem {tamanho_mb}MBs ou {tamanho_kb}KBs.')
	```

#### Exercício 14

João, um pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

=== "Código"
	```pyodide
	```

#### Exercício 15

Faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

- salário bruto.
- quanto pagou ao INSS.
- quanto pagou ao sindicato.
- o salário líquido.
- calcule os descontos e o salário líquido, conforme a tabela abaixo:

```
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
```

> Obs.: Salário Bruto - Descontos = Salário Líquido.

=== "Código"
	```pyodide
	```

#### Exercício 16

Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

=== "Código"
	```pyodide
	```

#### Exercício 17

Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.

- Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
- comprar apenas latas de 18 litros;
- comprar apenas galões de 3,6 litros;
- misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

=== "Código"
	```pyodide
	```

#### Exercício 18

Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

=== "Código"
	```pyodide
	```
