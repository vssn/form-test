import { LitElement, html } from 'lit-element';
import '@lion/input/lion-input.js';
import '@lion/fieldset/lion-fieldset.js';

class MyComponent extends LitElement {
  static get properties() {
    return {
      success: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.success = true;
  }

  showFormData() {
    const serializeGroup = this.shadowRoot.querySelector('#fieldset')
      .serializeGroup();

    this.shadowRoot.querySelector('#output').innerHTML = JSON.stringify(
      serializeGroup
    );
    return serializeGroup;
  }

  render() {
    return html`
      <p>Hello world!</p>
      <form>
        <lion-fieldset id="fieldset">
          <lion-input name="greeting" type="text" value="Hello"></lion-input>
        </lion-fieldset>
      </form>
      <button @click="${this.showFormData}">Show</button>
      <div id="output"></div>
    `;
  }
}

customElements.define('my-component', MyComponent);
