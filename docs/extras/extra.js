hljs.highlightAll();

class CodeExercice extends HTMLElement {
    constructor() {
	super();
	if (this.hasAttribute('testfilepath')) {
	    this.testPath = this.attributes.testfilepath.value;
	    this.hasTest = true;
	} else {
	    this.testPath = this.id;
	    this.hasTest = false;
	}
	this.source = this.attributes.source.value
	this.darkTheme = 'github_dark'
	this.lightTheme = 'github_light_default'

	document.querySelector(
	    'label[title="Modo claro"]'
	).addEventListener('click', () => this.setTheme('default'))
	document.querySelector(
	    'label[title="Modo noturno"]'
	).addEventListener('click', () => this.setTheme('slate'))
    }

    setTheme(currentTheme) {
	if (currentTheme === "default") {
            this.editor.setTheme("ace/theme/" + this.lightTheme);
	} else if (currentTheme === "slate") {
            this.editor.setTheme("ace/theme/" + this.darkTheme);
	}
    }

    getTheme() {
	var theme = document.body.getAttribute('data-md-color-scheme')

	if (theme == 'default'){
	    return this.lightTheme
	}
	return this.darkTheme
    }

    saveCode() {
        function dataUrl(data) {
            return "data:x-application/text;charset=utf-8," + escape(data);
        }
        var downloadLink = document.createElement("a");
        downloadLink.href = dataUrl(this.editor.getValue());
        downloadLink.download = 'exercicio.py';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    copyCode() {
	navigator.clipboard.writeText(this.editor.getValue()).then(function() {
	    console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
	    console.error('Async: Could not copy text: ', err);
	});
    }

    cleanOutput() {
	this.result.innerHTML = '';
    }

    async initPyodide() {
	this.pyodide = await loadPyodide({packages: ['pytest']});
	this.cleanOutput();
        this.pyodide.setStdin(
	    { stdin: () => prompt() }
	);
        this.pyodide.setStdout(
	    { batched: (string) => { writeOutput(string.toString()) } }
	);
	this.pyodide.setStderr(
	    { batched: (string) => { writeOutput(string.toString()) } }
	);
    }

    async runCode() {
	let pyodide = await this.pyodideReadyPromise;
        this.cleanOutput();
        this.pyodide.setStdout(
	    {
		batched: (string) => {
		    this.writeOutput(string.toString());
		}
	    }
	);
	if (this.editor.getValue()) {
	    try {
		let output = this.pyodide.runPython(this.editor.getValue());
            } catch (err) {
		this.writeOutput(err.toString());
	    }
	} else {
	    this.writeOutput('Não existe código no editor...');
	}
    }

    async writeOutput(value) {
	let code = hljs.highlight(value, {language: "python"}).value
	this.result.innerHTML += `<pre><code>${code}</code></pre>`;
    }

    loadAce() {
	this.editor = ace.edit(`${this.code}`, {
	    mode: "ace/mode/python",
	    minLines: 10,
	    maxLines: 20,
	    fontSize: '.8rem',
	    theme: `ace/theme/${this.getTheme()}`
        });
    }

    connectedCallback() {
	this.getTheme()
	this.code = `code-${this.testPath}`
        this.innerHTML = `
      <pre id="${this.code}">${this.source}</pre>
      <input
       id="play-${this.code}"
       name="play"
       type="button"
       value="Play!"/>
      <input
       id="test-${this.code}"
       name="test"
       type="button"
       value="Test!"
       disabled/>
      <input
       id="clean-${this.code}"
       name="clean"
       type="button"
       value="Clean!"/>
      <input
       id="save-${this.code}"
       name="save"
       type="button"
       value="Save!"/>
      <input
       id="copy-${this.code}"
       name="copy"
       type="button"
       value="Copy!"/>
      <div id="result-${this.code}">Iniciando...</div>
`
	this.loadAce();
	this.result = document.getElementById(`result-${this.code}`);

	const playBtn = document.getElementById(`play-${this.code}`);
	const testBtn = document.getElementById(`test-${this.code}`);
	const cleanBtn = document.getElementById(`clean-${this.code}`);
	const saveBtn = document.getElementById(`save-${this.code}`);
	const copyBtn = document.getElementById(`copy-${this.code}`);

	if (this.hasTest) {
	    testBtn.disabled = false;
	}

	playBtn.addEventListener('click', () => this.runCode())
	testBtn.addEventListener('click', () => this.testCode())
	cleanBtn.addEventListener('click', () => this.cleanOutput())
	copyBtn.addEventListener('click', () => this.copyCode())
	saveBtn.addEventListener('click', () => this.saveCode())

	this.pyodideReadyPromise = this.initPyodide();
    }

    async testCode(exercice) {
	let pyodide = await this.pyodideReadyPromise;
	this.writeOutput('Testing...');

	this.cleanOutput()

	this.pyodide.setStdout(
	    { batched: (string) => {
		console.log(string)
		if (string.startsWith('FAILED'))
		    this.writeOutput(
			`${string.split('-')[1]}`
		    )
	    }}
	);
	const globals = this.pyodide.toPy(
	    {
		editor: this.editor,
		testPath: this.testPath
	    }
	);
	let output = this.pyodide.runPythonAsync(`
import pytest
from js import window
from pyodide.http import pyfetch
from pathlib import Path

async def test(exercice: str) -> None:
    with open("sut.py", "w") as f:
        f.write(editor.getValue())

    # checar se o arquivo .py já não existe
    if not Path('{exercice}.py').exists():
        response = await pyfetch(
            f"{window.location.origin}/tests/{exercice}.py"
        )
    with open(f"{exercice}.py", "wb") as f:
        f.write(await response.bytes())

    pytest.main(
        [
            f'{exercice}.py',
            '--tb=no',
            '--no-header',
            '--capture=no',
            '-q',
        ]
    )

test(testPath)
`, { globals })
    }
}

customElements.define('code-exercice', CodeExercice);
