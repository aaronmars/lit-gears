import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('demo-row')
export class DemoRow extends LitElement {
  static styles = css`
    :host {
      margin: 1rem;
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}
