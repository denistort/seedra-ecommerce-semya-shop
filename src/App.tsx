import { Component } from 'solid-js';

import { styled } from 'solid-styled-components';
import { Header, Footer } from '@shared-components/Singletons';

import { RouterComponent } from './router';

const Wrapper = styled('div')`
  background-color: ${(props) => props.theme?.colors.white};
  min-height: 100vh;
`;

const App: Component = () => {
  return (
    <Wrapper>
      <Header></Header>
      <RouterComponent></RouterComponent>
      <Footer></Footer>
    </Wrapper>
  );
};

export default App;
