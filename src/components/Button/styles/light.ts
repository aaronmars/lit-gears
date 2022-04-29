import { css } from 'lit';

export default css`
  .btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-light:hover {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-light:focus {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
  }
  .btn-light:active,
  .btn-light.active {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-light:active:focus,
  .btn-light.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
  }
  .btn-light:disabled,
  .btn-light.disabled {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-light:hover {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-light:active,
  .btn-outline-light.active {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-light:active:focus,
  .btn-outline-light.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-light:disabled,
  .btn-outline-light.disabled {
    color: #f8f9fa;
    background-color: transparent;
  }
`;
