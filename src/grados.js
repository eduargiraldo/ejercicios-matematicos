import { LitElement, html, render } from "lit-element";
import styleScss from "./sumaStyle.js";

export class Grados extends LitElement {
  static get styles() {
    return [styleScss];
  }

  convert(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2);
  }

  render() {
    return html`
      <h2>Fahrenheit a centigrados </h2>

      <label for="fahrenheit">Fahrenheit ingrese :</label>
      <input type="text" id="fahrenheit" @input="${(e) => this.shadowRoot.getElementById('celsius').value = this.convert(e.target.value)}">
      <br>      <br>

      <label for="celsius">temperatura en centigrados</label>
      <input type="text" id="celsius" readonly>
    `;
  }
}

customElements.define("my-grados", Grados);





/////////////////////////////////////////////////////////////////RAIZ CUADRADA////////////////////////////////////////////////////////////////////////////
import { LitElement, html } from "lit-element";

export class Hipo extends LitElement {
  static get style() {
    return ;
  }

  Hipo() {
    var numero1 = this.shadowRoot.getElementById("numero1").value;
    var numero2 = this.shadowRoot.getElementById("numero2").value;

    if (numero1 !== "" && numero2 !== "" ){
      var Hipo = Math.sqrt(parseInt(numero1)*2 + parseInt(numero2)*2);
      this.shadowRoot.getElementById("resultado").value = Hipo;
    }
  }
 
  render() {
    return html`

      <h2>Descubrir la hipotenusa</h2>

      <label for="numero1">Lado 1</label>
      <input type="text" id="numero1" @change="${this.Hipo}"><br><br>
      <label for="numero2">Lado 2</label>
      <input type="text" id="numero2" @change="${this.Hipo}"><br><br>
      <label for="resultado">Hipotenusa</label>
      <input type="text" id="resultado">
    `;
  }
}

customElements.define("my-hipo", Hipo);
