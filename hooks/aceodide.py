import markdown
import logging

log = logging.getLogger('mkdocs')

def exercice_validator(language, inputs, options, attrs, md):
    for key, value in inputs.items():
        options[key] = value
    return True


def exercice_format(
    source, language, class_name, options, md, **kwargs
):
    if test := options.get('test'):
        return f'<code-exercice testfilepath="{test}" source="{source}"></code-exercice>'
    else:
        return f'<code-exercice source="{source}"></code-exercice>'


def on_page_markdown(markdown_text, page, config, files):
    md = markdown.markdown(
        markdown_text,
        extensions=['pymdownx.superfences'] + config['markdown_extensions'],
        extension_configs=config['mdx_configs'] | {
            'pymdownx.superfences': {
                'custom_fences': [
                    {
                        'name': 'exercice',
                        'class': 'exercice',
                        'format': exercice_format,
                        'validator': exercice_validator,
                    },
                ]
            }
        },
    )

    return md
