import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import bodyReset from '../../styles/body.reset';
import fade from '../../styles/fade';
import variables from '../../styles/variables';
import { type BootstrapColor } from '../../types/bootstrapColor';
import '../Button/af-button';
import alertStyles from './styles/alert';

@customElement('af-alert')
export class AfAlert extends LitElement {
  static styles = [variables, bodyReset, alertStyles, fade];

  @property({ type: String }) color?: BootstrapColor = 'primary';
  @property({ type: Boolean }) dismissable = false;
  @property({ type: Boolean }) show = true;

  render() {
    return html`<div id="alert-element" class="${classMap(this.#classes)}" role="alert">
      <slot></slot>
      ${this.#dismissButton}
    </div>`;
  }

  get #classes(): ClassInfo {
    return {
      alert: true,
      [`alert-${this.color}`]: true,
      'alert-dismissable': this.dismissable,
      fade: this.dismissable,
      show: this.show,
    };
  }

  get #dismissButton() {
    if (this.dismissable) {
      return html`<af-button close @click="${this.#dismissClicked}"></af-button>`;
    }
    return null;
  }

  #dismissClicked() {
    const alertElement = this.renderRoot.querySelector<HTMLDivElement>('#alert-element');
    if (alertElement !== null) {
      alertElement.ontransitionend = () => {
        this.parentElement?.removeChild(this);
      };
    }
    this.show = false;
    this.requestUpdate();
  }
}
