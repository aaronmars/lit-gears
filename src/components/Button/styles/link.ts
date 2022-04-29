import { css } from 'lit';

export default css`
  .btn-link {
    font-weight: 400;
    color: #0d6efd;
    text-decoration: underline;
  }
  .btn-link:hover {
    color: #0a58ca;
  }
  .btn-link:disabled,
  .btn-link.disabled {
    color: #6c757d;
  }
`;
