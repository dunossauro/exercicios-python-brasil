def exercice_validator(language, inputs, options, attrs, md):
    for key, value in inputs.items():
        options[key] = value
    return True


def exercice_format(
    source, language, class_name, options, md, **kwargs
):
    return f'<code-exercice exercice="{options["test"]}" source="{source}"></code-exercice>'
