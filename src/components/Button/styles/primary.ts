import { css } from 'lit';

export default css`
  .btn-primary {
    color: #fff;
    background-color: var(--color-primary, #0d6efd);
    border-color: var(--color-primary, #0d6efd);
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:active,
  .btn-primary.active {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
  }
  .btn-primary:active:focus,
  .btn-primary.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:disabled,
  .btn-primary.disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .btn-outline-primary {
    color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-outline-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  .btn-outline-primary:active,
  .btn-outline-primary.active {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-outline-primary:active:focus,
  .btn-outline-primary.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  .btn-outline-primary:disabled,
  .btn-outline-primary.disabled {
    color: #0d6efd;
    background-color: transparent;
  }
`;
