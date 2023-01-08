import { Component, lazy } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Header } from './shared-components/Header';
import { RouterComponent } from './router';
import { Footer } from './shared-components/Footer';

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
