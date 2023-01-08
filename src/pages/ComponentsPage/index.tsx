import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import {
  Button,
  Container,
  DeliveryTypeMenu,
  Typography,
} from '@shared-components/ui';

const Wrapper = styled('div')`
  padding-top: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Components: Component = () => {
  return (
    <Container>
      <Wrapper>
        <DeliveryTypeMenu
          onChange={(value) => console.log(value)}
          variants={[
            { name: 'delivery 1', price: 10 },
            { name: 'delivery 2', price: 20 },
            { name: 'delivery 3', price: 30 },
          ]}
        ></DeliveryTypeMenu>

        <div>
          <Button apperance={'primary'} style={{ marginLeft: '1.7rem' }}>
            Add to card
          </Button>
          <Button apperance={'ghost'} style={{ marginLeft: '1.7rem' }}>
            Add to card
          </Button>
          <Button apperance={'icon'} style={{ marginLeft: '1.7rem' }}>
            w
          </Button>
        </div>

        <Typography as={'heading-one'}>
          SEEDRA Basil Seeds for indoor and outdoor Planting
        </Typography>

        <Typography as={'heading-two'}>
          SEEDRA Basil Seeds for indoor and outdoor Planting
        </Typography>

        <Typography as={'heading-three'}>
          SEEDRA Basil Seeds for indoor and outdoor Planting
        </Typography>
      </Wrapper>
    </Container>
  );
};

export default Components;
