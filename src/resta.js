import { LitElement, html, render } from "lit-element";
import styleScss from "./sumaStyle.js";

export class Resta extends LitElement {
  static get styles() {
    return [styleScss];
  }

  restar() {
    var numero1 = this.shadowRoot.getElementById("numero1").value;
    var numero2 = this.shadowRoot.getElementById("numero2").value;
    if (numero1 !== "" && numero2 !== "") {
      var resta = parseInt(numero1) - parseInt(numero2);
      this.shadowRoot.getElementById("resultado").value = resta;
    }
  }

  render() {
    return html`
      <h2> resta de dos numeros </h2>

      <label for="numero1">Numero 1</label>
      <input type="text" id="numero1" @change="${this.restar}"><br><br>
      <label for="numero2">Numero 2</label>
      <input type="text" id="numero2" @change="${this.restar}"><br><br>
      <label for="resultado">Resultado</label>
      <input type="text" id="resultado">
    `;
  }
}

customElements.define("my-resta", Resta);