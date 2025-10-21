---
comments: true
hide:
  - toc
---

Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

=== "Código"
	```pyodide
	```

=== "Resposta"
	```pyodide
	nome = input('Digite seu nome: ')
	senha = input('Digite sua senha: ')

	while nome == senha:
		print('Sua senha não pode ser seu nome.
		print('Por favor, digite novamete seu nome e senha')

		nome = input('Digite seu nome: ')
		senha = input''Digite sua senha: ')

	print('Olá,', nome, 'sua senha esta segura comigo ;)')
	```
