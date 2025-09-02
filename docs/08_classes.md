---
comments: true
---

# Exercícios sobre classes

#### Exercício 01

Crie uma classe que modele uma bola:

- Atributos: `cor`, `circunferência`, `material`
- Métodos: `troca_cor` e `mostra_cor`

```pyodide
```

#### Exercício 02

Crie uma classe que modele um quadrado:

- Atributos: Tamanho do lado
- Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;

```pyodide
```

#### Exercício 03

Crie uma classe que modele um retângulo:

- Atributos: `Lado_a`, `Lado_b` (ou Comprimento e Largura, ou Base e Altura, a escolher)
- Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;

Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.

```pyodide
```

#### Exercício 04

Crie uma classe que modele uma pessoa:

- Atributos: nome, idade, peso e altura
- Métodos: Envelhercer, engordar, emagrecer, crescer. Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.

```pyodide
```

#### Exercício 05

Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes: alterarNome, depósito e saque; No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios.

```pyodide
```

#### Exercício 06

Faça um programa que simule um televisor criando-o como um objeto. O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume. Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.

```pyodide
```

#### Exercício 07

Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):

- Atributos: Nome, Fome, Saúde e Idade b.
- Métodos: Alterar Nome, Fome, Saúde e Idade; Retornar Nome, Fome, Saúde e Idade

Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer momento. 

```pyodide
```

#### Exercício 08

Desenvolva uma classe Macaco, que possua os atributos nome e bucho (estomago) e pelo menos os métodos `comer()`, `ver_bucho()` e `digerir()`.

Faça um programa ou teste interativamente, criando pelo menos dois macacos, alimentando-os com pelo menos 3 alimentos diferentes e verificando o conteúdo do estomago a cada refeição. Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?


```pyodide
```

#### Exercício 09

Faça um programa completo utilizando funções e classes que:

- Possua uma classe chamada Ponto, com os atributos x e y.
- Possua uma classe chamada Retangulo, com os atributos largura e altura.
- Possua uma função para imprimir os valores da classe Ponto
- Possua uma função para encontrar o centro de um Retângulo.
- Você deve criar alguns objetos da classe Retangulo.
- Cada objeto deve ter um vértice de partida, por exemplo, o vértice inferior esquerdo do retângulo, que deve ser um objeto da classe Ponto.
- A função para encontrar o centro do retângulo deve retornar o valor para um objeto do tipo ponto que indique os valores de x e y para o centro do objeto.
- O valor do centro do objeto deve ser mostrado na tela
- Crie um menu para alterar os valores do retângulo e imprimir o centro deste retângulo. 

```pyodide
```

#### Exercício 10

Faça um programa completo utilizando classes e métodos que:

1. Possua uma classe chamada bombaCombustível, com no mínimo esses atributos:
    - `tipo_combustivel`
	- `valor_litro`
	- `quantidade_combustivel`

2. Possua no mínimo esses métodos:
    - `abastecer_por_valor()`: método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
	- `abastecer_por_litro()`: método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
	- `alterar_valor()`: altera o valor do litro do combustível.
	- `alterar_combustivel()`: altera o tipo do combustível.
	- `alterar_quantidade_combustivel()`: altera a quantidade de combustível restante na bomba. 

OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. 

```pyodide
```

#### Exercício 11

Implemente uma classe chamada Carro com as seguintes propriedades:

1. Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
2. O consumo é especificado no construtor e o nível de combustível inicial é `0`.
3. Forneça um método `andar()` que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
4. Forneça um método `obter_gasolina()`, que retorna o nível atual de combustível.
5. Forneça um método `adicionar_gasolina()`, para abastecer o tanque.

Exemplo de uso:
```python
meu_fusca = Carro(15)             # 15 quilômetros por litro de combustível. 
meu_fusca.adicionar_gasolina(20)  # abastece com 20 litros de combustível. 
meu_fusca.andar(100)              # anda 100 quilômetros.
meu_fusca.obter_gasolina()         # Imprime o combustível que resta no tanque.
```

```pyodide
```

#### Exercício 12

Faça uma classe `ContaInvestimento` que seja semelhante a classe `ContaBancaria`, com a diferença de que se adicione um atributo `taxa_juros`. Forneça um inicializador que configure tanto o saldo inicial como a taxa de juros. Forneça um método `adicione_juros()` (sem parâmetro explícito) que adicione juros à conta.

Escreva um programa que construa uma poupança com um saldo inicial de R$1000,00 e uma taxa de juros de 10%. Depois aplique o método `adicione_juros()` cinco vezes e imprime o saldo resultante.

```pyodide
```

#### Exercício 13

Implemente a classe Funcionário. Um empregado tem um nome (um string) e um salário(um float). Escreva um construtor com dois parâmetros (nome e salário) e métodos para devolver nome e salário. Escreva um pequeno programa que teste sua classe.

```pyodide
```

#### Exercício 14

Aprimore a classe do exercício anterior para adicionar o método `aumentar_salario()` (`porcentual_de_aumento`) que aumente o salário do funcionário em uma certa porcentagem.

Exemplo de uso:

```python
harry = funcionário('Harry', 25000)
harry.aumentar_salario(10)
```

```pyodide
```

#### Exercício 15

Melhore o programa do bichinho virtual, permitindo que o usuário especifique quanto de comida ele fornece ao bichinho e por quanto tempo ele brinca com o bichinho. Faça com que estes valores afetem quão rapidamente os níveis de fome e tédio caem.

```pyodide
```

#### Exercício 16

Crie uma "porta escondida" no programa do programa do bichinho virtual que mostre os valores exatos dos atributos do objeto. Consiga isto mostrando o objeto quando uma opção secreta, não listada no menu, for informada na escolha do usuário.

> Dica: acrescente um método especial str() à classe Bichinho.

```pyodide
```

#### Exercício 17

Crie uma fazenda de bichinhos instanciando vários objetos bichinho e mantendo o controle deles através de uma lista. Imite o funcionamento do programa básico, mas ao invés de exigis que o usuário tome conta de um único bichinho, exija que ele tome conta da fazenda inteira. Cada opção do menu deveria permitir que o usuário executasse uma ação para todos os bichinhos (alimentar todos os bichinhos, brincar com todos os bichinhos, ou ouvir a todos os bichinhos).

Para tornar o programa mais interessante, dê para cada bichinho um nivel inicial aleatório de fome e tédio. 

```pyodide
```
