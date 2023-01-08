import { createGlobalStyles } from 'solid-styled-components';
import { DEFAULT_FONT_SIZE } from './constants';

export const GlobalStyles = createGlobalStyles`
    html {
      font-size: ${DEFAULT_FONT_SIZE}%;
    }
    body {
      margin: 0;
      padding: 0;
    }
    * {
      box-sizing: border-box;
    }
  `;
