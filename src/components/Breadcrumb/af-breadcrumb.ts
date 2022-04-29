import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('af-breadcrumb')
export class AfBreadcrumb extends LitElement {
  static styles = css`
    .breadcrumb {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0;
      margin-bottom: 1rem;
      list-style: none;
    }
  `;

  render() {
    return html`<ol class="breadcrumb">
      <slot></slot>
    </ol>`;
  }
}
