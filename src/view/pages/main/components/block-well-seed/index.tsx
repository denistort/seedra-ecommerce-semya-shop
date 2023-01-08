import { Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';
import SeedBg from '../../../../assets/img/weelSeed.png';

const WellSeedWrapper = styled('div')`
  background: rgba(255, 230, 46, 0.09);
  border-radius: 12px;
  background-image: url(${SeedBg});
  min-height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.6rem;
  color: ${(p) => p.theme?.colors.text_secondary};
`;
export const WellSeed: Component<{ children: JSX.Element }> = (props) => (
  <WellSeedWrapper>{props.children}</WellSeedWrapper>
);
