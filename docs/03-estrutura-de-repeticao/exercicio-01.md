---
comments: true
hide:
  - toc
---

Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	while True:
		valor = int(input('Insira uma nota entre 0 e 10: '))

		if valor >= 0 and valor <= 10:
			break
	```
