import 'solid-styled-components';
import { defaultTheme } from './themes';

type theme = typeof defaultTheme;

declare module 'solid-styled-components' {
  export interface DefaultTheme extends theme {}
}
