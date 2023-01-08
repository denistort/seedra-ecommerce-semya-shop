import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { Container } from '../../shared-components/ui';
import { Typography } from '../../shared-components/ui/Typography';
import { WellSeed } from './components/block-well-seed';
import { IntroSection } from './components/intro-section';
import { OurBlogSection } from './components/our-blog-section';
import { OurProductSection } from './components/our-propducts';

const Wrapper = styled('div')`
  padding-top: 3.2rem;
`;

const MainPage: Component = () => {
  return (
    <Wrapper>
      <Container>
        <IntroSection></IntroSection>
        <WellSeed>
          <Typography as={'heading-three'}>We sell seeds </Typography>
          <Typography as={'medium-16'}>
            that always sprout and gardening supplies which never break{' '}
          </Typography>
        </WellSeed>
        <OurProductSection></OurProductSection>
        <OurBlogSection></OurBlogSection>
      </Container>
    </Wrapper>
  );
};

export default MainPage;
