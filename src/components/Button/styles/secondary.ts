import { css } from 'lit';

export default css`
  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
  }
  .btn-secondary:focus {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  .btn-secondary:active,
  .btn-secondary.active {
    color: #fff;
    background-color: #565e64;
    border-color: #51585e;
  }
  .btn-secondary:active:focus,
  .btn-secondary.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
  }
  .btn-secondary:disabled,
  .btn-secondary.disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:active,
  .btn-outline-secondary.active {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:active:focus,
  .btn-outline-secondary.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:disabled,
  .btn-outline-secondary.disabled {
    color: #6c757d;
    background-color: transparent;
  }
`;
