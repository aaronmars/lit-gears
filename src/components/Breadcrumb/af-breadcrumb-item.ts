import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';

@customElement('af-breadcrumb-item')
export class AfBreadcrumbItem extends LitElement {
  static styles = css`
    .breadcrumb-item + .breadcrumb-item {
      padding-left: 0.5rem;
    }
    .breadcrumb-item + .breadcrumb-item::before {
      float: left;
      padding-right: 0.5rem;
      color: #6c757d;
      content: var(--bs-breadcrumb-divider, '/') /* rtl: var(--bs-breadcrumb-divider, "/") */;
    }
    .breadcrumb-item.active {
      color: #6c757d;
    }
  `;

  @property({ type: Boolean }) active = false;

  render() {
    const classes: ClassInfo = { 'breadcrumb-item': true, active: this.active };
    return html`<li class="${classMap(classes)}"><slot></slot></li>`;
  }
}
