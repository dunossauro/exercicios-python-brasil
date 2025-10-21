---
comments: true
hide:
  - toc
---

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
