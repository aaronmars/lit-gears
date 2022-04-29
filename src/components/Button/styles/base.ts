import { css } from 'lit';

export default css`
  button {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-top-left-radius: var(--internal-border-top-left-radius, 0.25em);
    border-top-right-radius: var(--internal-border-top-right-radius, 0.25em);
    border-bottom-left-radius: var(--internal-border-bottom-left-radius, 0.25em);
    border-bottom-right-radius: var(--internal-border-bottom-right-radius, 0.25em);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn:hover {
    color: #212529;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .btn:disabled,
  .btn.disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`;
