---
comments: true
hide:
  - toc
---

Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
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
