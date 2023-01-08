import { Component, ComponentWithChildren, splitProps } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ButtonProps } from './type';

const AbstractButton = styled('button')`
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;
const PrimaryButton = styled(AbstractButton)`
  padding: 1.1rem 3.3rem;
  color: ${(p) => p.theme?.colors.white};
  background-color: ${(p) => p.theme?.colors.green_brand};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(p) => p.theme?.colors.hover};
  }
  &:active {
    box-shadow: ${(p) => p.theme?.boxShadowActive};
    background-color: ${(p) => p.theme?.colors.primary_color};
  }
  &:focus {
    box-shadow: ${(p) => p.theme?.boxShadowActive};
  }
`;

const GhostButton = styled(AbstractButton)`
  padding: 1.1rem 3.3rem;
  background-color: ${(p) => p.theme?.colors.white};
  color: ${(p) => p.theme?.colors.green_brand};
  transition: all 0.3s ease;

  &:active {
    background-color: rgba(53, 151, 64, 0.08);
    box-shadow: inset 0px 0px 0px 1px #359740;
  }
  &:hover {
    background-color: rgba(53, 151, 64, 0.08);
  }
`;

const IconButton = styled(AbstractButton)`
  padding: 1.2rem 1.4rem;
  background-color: transparent;
  color: ${(p) => p.theme?.colors.green_brand};
  transition: all 0.3s ease;
  box-shadow: inset 0px 0px 0px 1px ${(p) => p.theme?.colors.light_grey_stroke};
  & svg {
    padding: 0;
  }
  &:active {
    background-color: #359740;
    color: white;
  }
  &:hover {
    background-color: rgba(53, 151, 64, 0.08);
  }
`;
const Buttons = {
  ghost: GhostButton,
  primary: PrimaryButton,
  icon: IconButton,
};
export const Button: ComponentWithChildren<ButtonProps> = (props) => {
  const [ap, rest] = splitProps(props, ['apperance']);
  const apperance = props.apperance || 'primary';
  const Component = Buttons[apperance];
  return <Component {...rest}>{props.children}</Component>;
};
