---
comments: true
hide:
  - toc
---

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
