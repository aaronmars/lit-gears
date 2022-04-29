import { css } from 'lit';

export default css`
  .btn-success {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-success:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
  }
  .btn-success:focus {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
  }
  .btn-success:active,
  .btn-success.active {
    color: #fff;
    background-color: #146c43;
    border-color: #13653f;
  }
  .btn-success:active:focus,
  .btn-success.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
  }
  .btn-success:disabled,
  .btn-success.disabled {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }

  .btn-outline-success {
    color: #198754;
    border-color: #198754;
  }
  .btn-outline-success:hover {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-outline-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
  }
  .btn-outline-success:active,
  .btn-outline-success.active {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
  }
  .btn-outline-success:active:focus,
  .btn-outline-success.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
  }
  .btn-outline-success:disabled,
  .btn-outline-success.disabled {
    color: #198754;
    background-color: transparent;
  }
`;
