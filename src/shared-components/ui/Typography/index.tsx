import { ComponentWithChildren, splitProps } from 'solid-js';
import { styled } from 'solid-styled-components';

const HeadingFirst = styled('h1')`
  font-family: 'Lexend';
  font-size: 4.8rem;
  line-height: 5.4rem;
  font-weight: 600;
  letter-spacing: -0.05em;
  color: ${(p) => p.theme?.colors.text_primary};
`;
const HeadingSecondary = styled('h2')`
  font-family: 'Lexend';
  font-style: normal;
  color: ${(p) => p.theme?.colors.text_primary};
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 5.4rem;
  letter-spacing: -0.05em;
`;

const HeadingTertianary = styled('h3')`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme?.colors.text_primary};
`;

const Light16 = styled('p')`
  font-family: 'Lexend';
  font-style: normal;
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-weight: 300;
  color: ${(p) => p.theme?.colors.text_primary};
  padding-top: 1.2rem;
  padding-bottom: 2.1rem;
`;
const Medium16 = styled('p')`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 178.19%;
  letter-spacing: -0.035em;
`;
const typorgraphy = {
  'heading-one': HeadingFirst,
  'heading-two': HeadingSecondary,
  'heading-three': HeadingTertianary,
  'light-16': Light16,
  'medium-16': Medium16,
};
export type typorgraphyKeys = typeof typorgraphy;

export type TypographyProps = {
  as: keyof typorgraphyKeys;
};
export const Typography: ComponentWithChildren<TypographyProps> = (props) => {
  const [_, rest] = splitProps(props, []);
  const ap = props.as;
  const Component = typorgraphy[ap];
  return <Component {...rest}>{props.children}</Component>;
};
