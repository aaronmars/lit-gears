import { css } from 'lit';

export const textDark = css`
  .text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
  }
`;

export default css`
  .text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
  }

  .text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
  }

  .text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
  }

  .text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
  }

  .text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
  }

  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
  }

  .text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  }

  .text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
  }

  .text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
  }

  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }

  .text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
  }

  .text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important;
  }

  .text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .text-white-50 {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
  }

  .text-opacity-25 {
    --bs-text-opacity: 0.25;
  }

  .text-opacity-50 {
    --bs-text-opacity: 0.5;
  }

  .text-opacity-75 {
    --bs-text-opacity: 0.75;
  }

  .text-opacity-100 {
    --bs-text-opacity: 1;
  }
`;
