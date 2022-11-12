import React from "react";
import { marked } from "marked";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# ¡Markdown Previewer!
## Este es un subtitulo
### Y aquí hay otras cosas geniales:      
      
Aquí hay un poco de código, \`<div>code</div>\` entre 2 backticks.
      
\`\`\`
// este es un código de varias líneas:
      const multipleLineCode = (param) => {
          if(param) {
              return param
          }
      }
\`\`\`
También puede hacer que el texto sea **negrita**... ¡vaya!

O _cursiva_.

O... espera... **_...ambos..._**

Y siéntete libre de volverte loco ~~tachando cosas~~.

También hay [enlaces](https://www.freecodecamp.org), y

> ¡Citas en bloque!

- Y, por supuesto, hay listas.
  - Algunas con viñetas.
     - Con diferentes niveles de sangría.
        - Que se ven así.


1. Y también hay listas numeradas.
1. ¡Usa sólo 1s si quieres!
1. Y por último, pero no menos importante, no olvidemos las imágenes incrustadas:

![logo de freeCodeCamp](https://archive.org/services/img/github.com-freeCodeCamp-freeCodeCamp_-_2021-02-16_22-21-31)
      `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    let inputStyle = {
      width: "500px",
      minHeight: "65vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    let outputStyle = {
      width: "500px",
      minHeight: "65vh",
      backgroundColor: "#f3ffeb",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <span className="text-align-center badge text-bg-light">
                  Markdown Previewer
                </span>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <span className="text-align-center badge text-bg-success">
                    Markdown Input
                  </span>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  id="editor"
                  className="input form-control"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <span className="text-align-center badge text-bg-danger mb-2">
                    Preview Output
                  </span>
                </h4>
              </div>
              <div
                id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
          <footer className="text-center pt-4 pb-4 fs-6">
            Codeado con ❤️ por{" "}
            <a
              href="https://github.com/FranciscoLGM"
              target="_blank"
              rel="noreferrer noopener"
            >
              FranciscoLGM
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
