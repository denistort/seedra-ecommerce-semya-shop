/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { StyledThemeProvider } from './styled-components';
import { GlobalStyles } from './styled-components/GlobalStyles';
import './index.css';
import { Router } from '@solidjs/router';

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
