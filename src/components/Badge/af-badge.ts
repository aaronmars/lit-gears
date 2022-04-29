import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { colorBackgrounds } from '../../styles/backgrounds';
import bodyReset from '../../styles/body.reset';
import { roundedPill } from '../../styles/rounded';
import { textDark } from '../../styles/textColors';
import variables from '../../styles/variables';
import { type BootstrapColor } from '../../types/bootstrapColor';
import badgeStyles from './af-badge.styles';

@customElement('af-badge')
export class AfBadge extends LitElement {
  static styles = [variables, bodyReset, badgeStyles, colorBackgrounds, textDark, roundedPill];

  @property({ type: String }) color: BootstrapColor = 'primary';
  @property({ type: Boolean }) pill = false;

  render() {
    return html`<span class="${classMap(this.#classes)}"><slot></slot></span>`;
  }

  get #classes(): ClassInfo {
    const darkTextColors: Array<BootstrapColor> = ['info', 'warning', 'light'];
    return {
      badge: true,
      [`bg-${this.color}`]: true,
      'rounded-pill': this.pill,
      'text-dark': darkTextColors.includes(this.color),
    };
  }
}
