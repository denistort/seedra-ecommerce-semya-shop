import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Button } from '../../../../shared-components/ui';
import { Typography } from '../../../../shared-components/ui/Typography';

import c from './style.module.css';

const Title = styled('div')`
  margin: 5rem 0;
  display: flex;
  justify-content: space-between;
`;
export const OurBlogSection: Component = () => {
  return (
    <section class={c.section}>
      <Title>
        <Typography as={'heading-two'}>Our blog.</Typography>
        <Button apperance={'ghost'}>Go to our blog</Button>
      </Title>
      <div classList={{ [c.grid]: true }}>
        <div classList={{ [c.item]: true, [c.long]: true }}></div>
        <div classList={{ [c.item]: true }}></div>
        <div classList={{ [c.item]: true }}></div>
        <div classList={{ [c.item]: true, [c.height]: true }}></div>
      </div>
    </section>
  );
};
