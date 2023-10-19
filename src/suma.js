import { LitElement, html } from "lit-element";
import styleScss from "./sumaStyle.js";



export class Suma extends LitElement {
  static get styles() {
   return [styleScss];
  }

  sumar() {
    var numero1 = this.shadowRoot.getElementById("numero1").value;
    var numero2 = this.shadowRoot.getElementById("numero2").value;
    var numero3 = this.shadowRoot.getElementById("numero3").value;

    if (numero1 !== "" && numero2 !== ""&& numero3 !=="") {
      var suma = parseInt(numero1) + parseInt(numero2) * parseInt(numero3);
      this.shadowRoot.getElementById("resultado").value = suma;
    }
  }

  render() {
    return html`
      <h2> suma de dos numeros </h2>

      <label for="numero1">Numero 1</label>
      <input type="text" id="numero1" @change="${this.sumar}"><br><br>
      <label for="numero2">Numero 2</label>
      <input type="text" id="numero2" @change="${this.sumar}"><br><br>
      <label for="numero2">Numero 3*</label>
      <input type="text" id="numero3" @change="${this.sumar}"><br><br>
      <label for="resultado">Resultado</label>
      <input type="text" id="resultado">
    `;
  }
}

customElements.define("my-suma", Suma);
