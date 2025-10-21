---
comments: true
hide:
  - toc
---

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
