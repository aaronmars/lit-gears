import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('af-button-group')
export class AfButtonGroup extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-flex;
      vertical-align: middle;
    }

    ::slotted(af-button:not(:last-child)) {
      --internal-border-top-right-radius: 0;
      --internal-border-bottom-right-radius: 0;
    }

    ::slotted(af-button:not(:first-child)) {
      --internal-border-top-left-radius: 0;
      --internal-border-bottom-left-radius: 0;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
