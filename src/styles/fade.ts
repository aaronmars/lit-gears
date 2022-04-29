import { css } from 'lit';

export default css`
  .fade {
    transition: opacity 0.15s linear;
  }
  .fade:not(.show) {
    opacity: 0;
  }
`;
