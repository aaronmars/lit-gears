import { BootstrapColor } from '../../types/bootstrapColor';

export type ElementSize = 'small' | 'normal' | 'large';
export type ButtonTag = 'button' | 'a' | 'input';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface AfButtonProps {
  color?: BootstrapColor;
  outline?: boolean;
  size?: ElementSize;
  close?: boolean;
  tag?: ButtonTag;
  type: ButtonType;
}
