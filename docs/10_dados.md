---
comments: true
---

# Lista de dados

Todos os exercícios dessa seção consideram a mesma base de dados para resolução:

|id|nome|salario|
|---|---|---|
|1 | Maria | 4500.03 |
|2 | José | 6500.05 |
|3 | Antonio | 3409.98 |
|4 | Ana | 5093.34 |
|5 | Mariana | 3458.54 |
|6 | Ana | 10932.59 |

#### Exercício 01

**Média de salário**

Qual o valor do salário médio?

=== "Código"
	```pyodide
    import micropip
    await micropip.install("pandas")

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
	```pyodide

    import micropip
    await micropip.install("pandas")

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

    media = df['salario'].mean()
    print(f"Salário Médio: R${media:.2f}")
    ```

#### Exercício 02

**Quantidade de Linhas**

Qual a quantidade de linhas do DataFrame

=== "Código"
	```pyodide
    import micropip
    await micropip.install("pandas")

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
	```pyodide

    import micropip
    await micropip.install("pandas")

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

    qtde = df.shape[0]
    print(f"Quantidade de linhas: {qtde}")
    ```

#### Exercício 03

**Quantidade de colunas**

Qual a quantidade de colunas do DataFrame

=== "Código"
	```pyodide
    import micropip
    await micropip.install("pandas")

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
	```pyodide

    import micropip
    await micropip.install("pandas")

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

    qtde = df.shape[1]
    print(f"Quantidade de colunas: {qtde}")
    ```

#### Exercício 04

**Estatísticas Descritivas**

Calcule as principais estatísticas descritivas do salário: mínimo, 1o quartil, média, mediana, 3o quartíl, máximo e desvio padrão.

=== "Código"
	```pyodide
    import micropip
    await micropip.install("pandas")

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
	```pyodide

    import micropip
    await micropip.install("pandas")

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

    estatisticas = df['salario'].describe().round(2)
    print(f"Principais estatísticas:\n{estatisticas}")
    ```

#### Exercício 05

**Ordenação**

Ordene o Dataframe em ordem alfabética considerando a coluna de nomes, em caso de empate, considere o maior salário.

=== "Código"
	```pyodide
    import micropip
    await micropip.install("pandas")

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
	```pyodide

    import micropip
    await micropip.install("pandas")

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

    df = df.sort_values(by=['nome', 'salario'], ascending=[True, False])
    print(f"Resultado ordenado:\n{df}")
    ```


#### Exercício 06

**Deduplicação**

Considere deduplicar os dados repetido por nome considerando o maior salário. Isto é, caso o nome se repita, remova as linhas com menor salário para o mesmo nome.

=== "Código"
	```pyodide
    import micropip
    await micropip.install("pandas")

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
	```pyodide

    import micropip
    await micropip.install("pandas")

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
