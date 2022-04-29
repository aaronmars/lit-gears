import { css } from 'lit';

export default css`
  .btn-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-dark:hover {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
  }
  .btn-dark:focus {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
  }
  .btn-dark:active,
  .btn-dark.active {
    color: #fff;
    background-color: #1a1e21;
    border-color: #191c1f;
  }
  .btn-dark:active:focus,
  .btn-dark.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
  }
  .btn-dark:disabled,
  .btn-dark.disabled {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }

  .btn-outline-dark {
    color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-outline-dark:active,
  .btn-outline-dark.active {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:active:focus,
  .btn-outline-dark.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-outline-dark:disabled,
  .btn-outline-dark.disabled {
    color: #212529;
    background-color: transparent;
  }
`;
