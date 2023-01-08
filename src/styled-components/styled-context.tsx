import {
  ComponentWithChildren,
  createContext,
  createSignal,
  useContext,
} from 'solid-js';
import { DefaultTheme, ThemeProvider } from 'solid-styled-components';
import { themes, ThemesType } from './themes';

export type CurrentThemeType = keyof ThemesType;
export type SetThemeContext = {
  setCurrentTheme: (themeName: CurrentThemeType) => void;
  getCurrentTheme: () => DefaultTheme;
};

const initialState: SetThemeContext = {
  setCurrentTheme: (themeName: CurrentThemeType) => {},
  getCurrentTheme: () => themes['light'],
};
const ThemeContext = createContext<SetThemeContext>(initialState);

export const StyledThemeProvider: ComponentWithChildren = (props) => {
  const [theme, setTheme] = createSignal<CurrentThemeType>('light');

  const setCurrentTheme = (themeName: CurrentThemeType) => {
    setTheme(themeName);
  };
  const getCurrentTheme = () => themes[theme()];

  const currentTheme = themes[theme()];

  return (
    <ThemeContext.Provider value={{ setCurrentTheme, getCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useSetTheme = (): SetThemeContext => useContext(ThemeContext);
