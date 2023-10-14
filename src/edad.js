import { LitElement, html } from "lit-element";
import styleScss from "./edadStyle.js";

class Edad extends LitElement {
  static get styles() {
    return [styleScss];
  }

  calcularEdad() {
    var fechaNacimiento = new Date(this.shadowRoot.getElementById("fechaNacimiento").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    this.shadowRoot.getElementById("resultado").innerHTML = "Tu edad es " + edad + " años.";
  }

  render() {
    return html`
    <div class="edad">

      <h2>Calculadora de Edad</h2>
      <label for="fechaNacimiento">Ingresa tu fecha de nacimiento:</label>
      <input type="date" id="fechaNacimiento">
      <button @click="${this.calcularEdad}">Calcular Edad</button>
      <h4 id="resultado"></h4>
      </div>
    `;
  }
}

customElements.define("my-edad", Edad);