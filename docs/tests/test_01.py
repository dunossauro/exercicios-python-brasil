import importlib

"""
Criar um fixture para sempre coletar os prints
"""

def teste_01(capsys):
    import sut 
    importlib.reload(sut)
    captured = capsys.readouterr()
    result = captured.out.strip()

    expected = 'Alo mundo'

    assert  result == expected, f'"{result}" != "{expected}"'
