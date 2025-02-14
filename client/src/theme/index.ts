import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC948',
      dark: '#b38d32',
      light: '#ffd97f',
      contrastText: '#0F0F11',
    },
    secondary: {
      main: '#EEEEEE',
      light: '#ffffff',
      dark: '#9B9B9B',
    },
    background: {
      default: '#0F0F11',
      paper: '#0F0F11',
    },
    text: {
      primary: '#EEEEEE',
      secondary: '#9B9B9B',
      disabled: '#3E3E42',
    },
    error: {
      main: '#E53E3E',
      light: '#FC8181',
      dark: '#9B2C2C',
    },
    warning: {
      main: '#ED8936',
      dark: '#9C4221',
      light: '#F0A05E',
      contrastText: '#0F0F11',
    },
    divider: '#3E3E42',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      color: '#CCC',
      fontSize: '96px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: '-1.5px',
    },
    h2: {
      color: '#CCC',
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h3: {
      color: '#CCC',
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0px',
    },
    h4: {
      color: '#CCC',
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.25px',
    },
    h5: {
      color: '#CCC',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0px',
    },
    h6: {
      color: '#CCC',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.15px',
    },
    caption: {
      color: '#CCC',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.5px',
    },
    overline: {
      color: '#CCC',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    subtitle1: {
      color: '#CCC',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.15px',
    },
    subtitle2: {
      color: '#CCC',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.1px',
    },
    body1: {
      color: '#CCC',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    body2: {
      color: '#CCC',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.17px',
    },
  },
  spacing: (factor: number) => factor * 8,
});

export default themeOptions;
