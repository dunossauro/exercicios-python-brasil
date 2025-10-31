---
comments: true
hide:
  - toc
---

**Deduplicação**

Considere deduplicar os dados repetido por nome considerando o maior salário. Isto é, caso o nome se repita, remova as linhas com menor salário para o mesmo nome.

=== "Código"
	```pyodide install="pandas" session="data" height="10"
    import pandas as pd

    data = [
        {"id":1, "nome": "Maria", "salario": 4500.03},
        {"id":2, "nome": "José", "salario": 6500.05},
        {"id":3, "nome": "Antonio", "salario": 3409.98},
        {"id":4, "nome": "Ana", "salario": 5093.34},
        {"id":5, "nome": "Mariana", "salario": 3458.54},
        {"id":6, "nome": "Ana", "salario": 10932.59},
    ]
    
    df = pd.DataFrame(data)
    ```

=== "Resposta"
	```pyodide install="pandas" session="data" height="10"
	import pandas as pd

    data = [
        {"id":1, "nome": "Maria", "salario": 4500.03},
        {"id":2, "nome": "José", "salario": 6500.05},
        {"id":3, "nome": "Antonio", "salario": 3409.98},
        {"id":4, "nome": "Ana", "salario": 5093.34},
        {"id":5, "nome": "Mariana", "salario": 3458.54},
        {"id":6, "nome": "Ana", "salario": 10932.59},
    ]
    df = pd.DataFrame(data)

	df = df.drop_duplicates(subset=['nome'], keep='last')
	print(df)
    ```
