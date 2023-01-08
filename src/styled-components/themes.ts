import { DefaultTheme } from 'solid-styled-components';

export const defaultTheme = {
  colors: {
    green_brand: '#359740',
    yellow: '#FFCF55',
    light_grey_stroke: '#EFEFEF',
    text_primary: '#1F2533',
    text_secondary: '#70737C',
    white: '#FFFFFF',
    primary_color: '#4FA083',
    light_blue: '#EFF2F8',
    danger: '#E55C5C',
    light_green: '#EAF1EB',
    grey: '#C4C4C4',
    hover: '#2BB159',
  },
  
  boxShadowActive: '0px 0px 0px 2px #359740a1',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  boxShadowInput: '0px 1px 6px rgba(0, 0, 0, 0.32)',

  sizes: {
    defaultContainerWidth: 110,

    bordeRadius: {
      small: '0.8rem',
      medium: '2.4rem',
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    green_brand: '#359740',
    yellow: '#FFCF55',
    light_grey_stroke: '#EFEFEF',
    text_primary: '#1F2533',
    text_secondary: '#70737C',
    white: '#FFFFFF',
    primary_color: '#4FA083',
    light_blue: '#EFF2F8',
    danger: '#E55C5C',
    light_green: '#EAF1EB',
    grey: '#C4C4C4',
    hover: '#2BB159',
  },
  boxShadowActive: '0px 0px 0px 2px #359740a1',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  boxShadowInput: '0px 1px 6px rgba(0, 0, 0, 0.32)',
  sizes: {
    defaultContainerWidth: 11,

    bordeRadius: {
      small: '0.8rem',
      medium: '2.4rem',
    },
  },
};

export type ThemesType = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

export const themes: ThemesType = {
  light: defaultTheme,
  dark: darkTheme,
};
