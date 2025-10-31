---
comments: true
hide:
  - toc
---

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
