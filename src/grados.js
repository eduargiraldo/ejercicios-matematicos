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