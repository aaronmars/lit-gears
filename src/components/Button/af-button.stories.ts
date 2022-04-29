import { type Meta, type Story } from '@storybook/web-components';
import { html } from 'lit';
import '../../helpers/demo-row';
import './af-button';
import { type AfButtonProps } from './af-button.types';

export default {
  title: 'Example/Button',
  component: 'af-button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      control: 'select',
    },
    '@click': { action: 'foo' },
    outline: { control: 'boolean' },
  },
} as Meta;

const Button: Story<Partial<AfButtonProps>> = ({ color = 'primary' }) => {
  return html`<demo-row>
      <af-button color="${color}">Primary</af-button>
      <af-button color="secondary">Secondary</af-button>
      <af-button color="success">Success</af-button>
      <af-button color="danger">Danger</af-button>
      <af-button color="warning">Warning</af-button>
      <af-button color="info">Info</af-button>
      <af-button color="light">Light</af-button>
      <af-button color="dark">Dark</af-button>
    </demo-row>
    <demo-row>
      <af-button color="primary" outline>Primary</af-button>
      <af-button color="secondary" outline>Secondary</af-button>
      <af-button color="success" outline>Success</af-button>
      <af-button color="danger" outline>Danger</af-button>
      <af-button color="warning" outline>Warning</af-button>
      <af-button color="info" outline>Info</af-button>
      <af-button color="light" outline>Light</af-button>
      <af-button color="dark" outline>Dark</af-button>
    </demo-row>
    <demo-row>
      <af-button color="light" size="small">Small</af-button>
      <af-button color="secondary">Default</af-button>
      <af-button color="dark" size="large">Large</af-button>
    </demo-row>`;
};

export const ButtonAll = Button.bind({});
