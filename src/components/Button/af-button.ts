import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import bodyReset from '../../styles/body.reset';
import variables from '../../styles/variables';
import { type BootstrapColor } from '../../types/bootstrapColor';
import { type ButtonTag, type ButtonType, type ElementSize } from './af-button.types';
import btnStyles from './styles';

@customElement('af-button')
export class AfButton extends LitElement {
  static styles = [variables, bodyReset, btnStyles];

  @property({ type: String }) color: BootstrapColor = 'primary';
  @property({ type: Boolean }) outline = false;
  @property({ type: String }) size: ElementSize = 'normal';
  @property({ type: Boolean }) close = false;
  @property({ type: String }) tag: ButtonTag = 'button';
  @property({ type: String }) type: ButtonType = 'button';

  render() {
    if (this.tag === 'a') {
      return html`<a class="${this.#classNames}"><slot></slot></a>`;
    }
    if (this.tag === 'input') {
      return html`<input class="${this.#classNames}" type="${this.type}" />`;
    }
    return html`<button class="${this.#classNames}" type="${this.type}">
      <slot></slot>
    </button>`;
  }

  get #classNames() {
    if (this.close) {
      return 'btn-close';
    }

    const classNames = ['btn'];

    if (this.outline) {
      classNames.push(`btn-outline-${this.color}`);
    } else {
      classNames.push(`btn-${this.color}`);
    }

    if (this.size === 'small') {
      classNames.push('btn-sm');
    } else if (this.size === 'large') {
      classNames.push('btn-lg');
    }
    return classNames.join(' ');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'af-button': AfButton;
  }
}
