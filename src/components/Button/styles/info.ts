import { css } from 'lit';

export default css`
  .btn-info {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-info:hover {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
  }
  .btn-info:focus {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
  }
  .btn-info:active,
  .btn-info.active {
    color: #000;
    background-color: #3dd5f3;
    border-color: #25cff2;
  }
  .btn-info:active:focus,
  .btn-info.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
  }
  .btn-info:disabled,
  .btn-info.disabled {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }

  .btn-outline-info {
    color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-outline-info:hover {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-outline-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
  }
  .btn-outline-info:active,
  .btn-outline-info.active {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
  .btn-outline-info:active:focus,
  .btn-outline-info.active:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
  }
  .btn-outline-info:disabled,
  .btn-outline-info.disabled {
    color: #0dcaf0;
    background-color: transparent;
  }
`;
