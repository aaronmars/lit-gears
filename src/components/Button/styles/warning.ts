import { css } from 'lit';

export default css`
  .btn-warning {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:hover {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
  }
  .btn-warning:focus {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
  }
  .btn-warning:active,
  .btn-warning.active {
    color: #000;
    background-color: #ffcd39;
    border-color: #ffc720;
  }
  .btn-warning:active:focus,
  .btn-warning.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
  }
  .btn-warning:disabled,
  .btn-warning.disabled {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }

  .btn-outline-warning {
    color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:hover {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
  }
  .btn-outline-warning:active,
  .btn-outline-warning.active {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:active:focus,
  .btn-outline-warning.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
  }
  .btn-outline-warning:disabled,
  .btn-outline-warning.disabled {
    color: #ffc107;
    background-color: transparent;
  }
`;
