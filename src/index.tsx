/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import { StyledThemeProvider } from './styled-components';
import { GlobalStyles } from './styled-components/GlobalStyles';
import App from './App';

import './global-styles/index.css';

render(
  () => (
    <Router>
      <StyledThemeProvider>
        <GlobalStyles />
        <App />
      </StyledThemeProvider>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
