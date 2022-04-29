import { css } from 'lit';

export default css`
  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
  .btn-check:focus + .btn-danger,
  .btn-danger:focus {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
  }
  .btn-check:checked + .btn-danger,
  .btn-check:active + .btn-danger,
  .btn-danger:active,
  .btn-danger.active,
  .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #b02a37;
    border-color: #a52834;
  }
  .btn-check:checked + .btn-danger:focus,
  .btn-check:active + .btn-danger:focus,
  .btn-danger:active:focus,
  .btn-danger.active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
  }
  .btn-danger:disabled,
  .btn-danger.disabled {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545;
  }
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-outline-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }
  .btn-outline-danger:active,
  .btn-outline-danger.active {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-outline-danger:active:focus,
  .btn-outline-danger.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
  }
  .btn-outline-danger:disabled,
  .btn-outline-danger.disabled {
    color: #dc3545;
    background-color: transparent;
  }
`;
