---
comments: true
---

# Estrutura de repetição

#### Exercício 1

Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	while True:
		valor = int(input('Insira uma nota entre 0 e 10: '))

		if valor >= 0 and valor <= 10:
			break
	```

#### Exercício 2

Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_02.py" linenums="1"
	nome = input('Digite seu nome: ')
	senha = input('Digite sua senha: ')

	while nome == senha:
		print('Sua senha não pode ser seu nome.
		print('Por favor, digite novamete seu nome e senha')

		nome = input('Digite seu nome: ')
		senha = input''Digite sua senha: ')

	print('Olá,', nome, 'sua senha esta segura comigo ;)')
	```

#### Exercício 3

Faça um programa que leia e valide as seguintes informações:

- Nome: maior que 3 caracteres;
- Idade: entre 0 e 150;
- Salário: maior que zero;
- Estado Civil: 's', 'c', 'v', 'd';

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_03.py" linenums="1"
	nome = input('Digite seu nome: ')
	while len(nome) < 3:
		print('O nome de ter pelo menos 3 caracteres')
		nome = input('Digite seu nome')

	idade = int(input('Digite sua idade: '))
	while not 0 < idade < 150:
		print('Sua idade deve estar entre 0 e 150')
		idade = int(input('Digite sua idade: '))

	salário = float(input('Digite seu salário: '))
	while salário <= 0:
		print('Seu salário deve ser maior que 0')
		salário = float(input('Digite seu salário: '))

	estados_civis = ['s', 'c', 'v', 'd']
	estado_civil = input(f'Digite seu estado civil: [{estados_civis}]')
	while estado_civil not in estados_civis:
		print(f'Por favor, digite uma das opções: [{estados_civis}]')
		estado_civil = input(f'Digite seu estado civil: [{estados_civis}]')

	print(f"---- Informações ----")
	print("Nome: ", nome)
	print("Idade: ", idade)
	print("Salário: ", salário)
	print("Estado Civel: ", estado_civil)
	```

#### Exercício 4

Supondo que a população de um país A seja da ordem de `80_000` habitantes com uma taxa anual de crescimento de 3% e que a população de B seja `200_000` habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_04.py" linenums="1"
	pais_A_habitantes, pais_A_crecimento = 80_000,  3
	pais_B_habitantes, pais_B_crecimento = 200_000, 1.5

	anos = 0
	while pais_A_habitantes < pais_B_habitantes:
		anos += 1
		pais_A_habitantes = pais_A_habitantes / pais_A_crecimento * 100 + pais_A_habitantes
		pais_B_habitantes = pais_B_habitantes / pais_B_crecimento * 100 + pais_B_habitantes

	print(f'Daqui {anos}.')
	print(f'O país A tera {pais_A_habitantes} habitantes.')
	print(f'O páis B tera {pais_A_habitantes} habitantes.')
	```

#### Exercício 5

Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_05.py" linenums="1"
	pais_A_habitantes = input('Número de habitantes do país A')
	pais_A_crecimento = input('Taxa de crscimento do país A')

	pais_B_habitantes = input('Número de habitantes do país B')
	pais_B_crecimento = input('Taxa de crscimento do país B')

	anos = 0
	while pais_A_habitantes < pais_B_habitantes:
		anos += 1
		pais_A_habitantes = pais_A_habitantes / pais_A_crecimento * 100 + pais_A_habitantes
		pais_B_habitantes = pais_B_habitantes / pais_B_crecimento * 100 + pais_B_habitantes

	print(f'Daqui {anos}.')
	print(f'O país A tera {pais_A_habitantes} habitantes.')
	print(f'O páis B tera {pais_A_habitantes} habitantes.')
	```

#### Exercício 6

Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 7

Faça um programa que leia 5 números e informe o maior número.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 8

Faça um programa que leia 5 números e informe a soma e a média dos números.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 9

Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 10

Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 11

Altere o programa anterior para mostrar no final a soma dos números.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 12

Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

```
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 13

Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 14

Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 15

A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 16

A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 17

Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 18

Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 19

Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 20

Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 21

Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 22

Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 23

Faça um programa que mostre todos os primos entre `1` e `N` sendo `N` um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 24

Faça um programa que calcule o mostre a média aritmética de N notas.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 25

Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 26

Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 27

Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 28

Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 29

O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

```
Lojas Quase Dois - Tabela de preços
1 - R$ 1.99
2 - R$ 3.98
...
50 - R$ 99.50
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 30

O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:

```
Preço do pão: R$ 0.18
Panificadora Pão de Ontem - Tabela de preços
1 - R$ 0.18
2 - R$ 0.36
...
50 - R$ 9.00
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 31

O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:

```
Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
...
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 32

Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:

Fatorial de: 5
5! =  5 . 4 . 3 . 2 . 1 = 120

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 33

O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 34

Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 35

Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 36

Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:

```
Montar a tabuada de: 5
Começar por: 4
Terminar em: 7

Vou montar a tabuada de 5 começando em 4 e terminando em 7:
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
```

> Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 37

Uma academia deseja fazer um censo entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 38

Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:

- Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
- Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
- A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior.

Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 39

Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em centímetros. Encontre o aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 40

Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito. Foram obtidos os seguintes dados:

- Código da cidade;
- Número de veículos de passeio (em 1999);
- Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
- Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
- Qual a média de veículos nas cinco cidades juntas;
- Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 41

Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.

Os juros e a quantidade de parcelas seguem a tabela abaixo:

```
Quantidade de Parcelas  % de Juros sobre o valor inicial da dívida
1       0
3       10
6       15
9       20
12      25
```

Exemplo de saída do programa:

```
Valor da Dívida Valor dos Juros Quantidade de Parcelas  Valor da Parcela
R$ 1.000,00     0               1                       R$  1.000,00
R$ 1.100,00     100             3                       R$    366,00
R$ 1.150,00     150             6                       R$    191,67
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 42

Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deverá terminar quando for lido um número negativo.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 43

O cardápio de uma lanchonete é o seguinte:
```
Especificação   Código  Preço
Cachorro Quente 100     R$ 1,20
Bauru Simples   101     R$ 1,30
Bauru com ovo   102     R$ 1,50
Hambúrguer      103     R$ 1,20
Cheeseburguer   104     R$ 1,30
Refrigerante    105     R$ 1,00
```

Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 44

Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:

```
1 , 2, 3, 4  - Votos para os respectivos candidatos
(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
5 - Voto Nulo
6 - Voto em Branco
```

Faça um programa que calcule e mostre:

- O total de votos para cada candidato;
- O total de votos nulos;
- O total de votos em branco;
- A percentagem de votos nulos sobre o total de votos;
- A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos tem-se o valor zero.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 45

Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido informar:

- Maior e Menor Acerto;
- Total de Alunos que utilizaram o sistema;
- A Média das Notas da Turma.

```
Gabarito da Prova:

01 - A
02 - B
03 - C
04 - D
05 - E
06 - E
07 - D
08 - C
09 - B
10 - A
```

Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos usarem o programa.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 46

Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:

```
Atleta: Rodrigo Curvêllo

Primeiro Salto: 6.5 m
Segundo Salto: 6.1 m
Terceiro Salto: 6.2 m
Quarto Salto: 5.4 m
Quinto Salto: 5.3 m

Melhor salto:  6.5 m
Pior salto: 5.3 m
Média dos demais saltos: 5.9 m

Resultado final:
Rodrigo Curvêllo: 5.9 m
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 47

Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média com as notas restantes). As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:

```
Atleta: Aparecido Parente
Nota: 9.9
Nota: 7.5
Nota: 9.5
Nota: 8.5
Nota: 9.0
Nota: 8.5
Nota: 9.7

Resultado final:
Atleta: Aparecido Parente
Melhor nota: 9.9
Pior nota: 7.5
Média: 9,04
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 48

Faça um programa que peça um numero inteiro positivo e em seguida mostre este numero invertido.

Exemplo:
```
  12376489
  => 98467321
```

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 49

Faça um programa que mostre os n termos da Série a seguir:

  S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m.

Imprima no final a soma da série.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 50

Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, Faça um programa que calcule o valor de H com N termos.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```

#### Exercício 51

Faça um programa que mostre os n termos da Série a seguir:

  S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m.

Imprima no final a soma da série.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```python title="exercício_01.py" linenums="1"
	```
