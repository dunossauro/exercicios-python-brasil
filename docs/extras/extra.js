hljs.highlightAll();

class CodeExercice extends HTMLElement {
    constructor() {
	super();
	this.exercice = this.attributes.exercice.value
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
        downloadLink.download = `${this.exercice}.py`;

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
		    this.writeOutput(string.toString())
		}
	    }
	);
	try {
            let output = this.pyodide.runPython(this.editor.getValue());
	    if (output == undefined) {
		this.writeOutput('Nenhum output detectado...');
	    } else if (output) {
                this.writeOutput(output.toString());
            }
        } catch (err) {
            this.writeOutput(err.toString());
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
	this.code = `code-${this.exercice}`
        this.innerHTML = `
      <pre id="${this.code}">${this.source}</pre>
      <input
       id="play-${this.exercice}"
       name="play"
       type="button"
       value="Play!"/>
      <input
       id="test-${this.exercice}"
       name="test"
       type="button"
       value="Test!"/>
      <input
       id="clean-${this.exercice}"
       name="clean"
       type="button"
       value="Clean!"/>
      <input
       id="save-${this.exercice}"
       name="save"
       type="button"
       value="Save!"/>
      <input
       id="copy-${this.exercice}"
       name="copy"
       type="button"
       value="Copy!"/>
      <div id="result-${this.exercice}">Iniciando...</div>
`
	this.loadAce();
	this.result = document.getElementById(`result-${this.exercice}`);

	const playBtn = document.getElementById(`play-${this.exercice}`);
	const testBtn = document.getElementById(`test-${this.exercice}`);
	const cleanBtn = document.getElementById(`clean-${this.exercice}`);
	const saveBtn = document.getElementById(`save-${this.exercice}`);
	const copyBtn = document.getElementById(`copy-${this.exercice}`);

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
		exercice: this.exercice
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
        # TODO: ARRUMAR ISSO! (localhost -> window)
        response = await pyfetch(f"http://localhost:8000/tests/{exercice}.py")
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

test(exercice)
`, { globals })
    }
}

customElements.define('code-exercice', CodeExercice);
