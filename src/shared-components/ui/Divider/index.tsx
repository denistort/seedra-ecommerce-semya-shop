import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const DividerS = styled('hr')`
  margin-top: 3.3rem;
  margin-bottom: 2rem;
  border: none;
  height: 1px;
  background: ${(p) => p.theme?.colors.green_brand};
`;

export const Divider: Component = () => {
  return <DividerS />;
};
