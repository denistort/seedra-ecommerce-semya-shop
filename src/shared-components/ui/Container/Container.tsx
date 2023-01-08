import { styled } from 'solid-styled-components';

export const Container = styled('div')`
  max-width: ${(props) => props.theme?.sizes.defaultContainerWidth + 'rem'};
  margin: 0 auto;
  height: auto;

  @media (max-width: 71.875em) {
    padding: 0 2rem;
  }
`;

export const SecondContainer = styled(Container)`
  background-color: black;
`;
