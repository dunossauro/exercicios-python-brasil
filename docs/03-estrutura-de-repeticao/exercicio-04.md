---
comments: true
hide:
  - toc
---

Supondo que a população de um país A seja da ordem de `80_000` habitantes com uma taxa anual de crescimento de 3% e que a população de B seja `200_000` habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
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
