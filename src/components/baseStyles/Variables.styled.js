const theme = {
  breakpoints: {
    mobile: '380px',
    tablet: '768px',
    desktop: '1280px',
    mobile_max: '379.98px',
    tablet_max: '767.98px',
    desktop_max: '1279.98px',
  },
  colors: {
    white: '#FFFFFF',
    yellow: '#FFB800',
    black: '#000000',
    gray: '#707070',
    braun: '#9A4E00',
    orange: '#9A4E00',
    opacity: 'rgba(113, 113, 113, 0.3)',
  },
  fonts: [
    'Kumar One, cursive',
    'Inria Sans, sans-serif',
    'Montserrat, sans-serif',
  ],
  fontSizes: {
    extraSmall: '10px',
    small: '13px',
    medium: '16px',
    mediumPlus: '20px',
    large: '24px',
    extra: '30px',
    extraXL: '36px',
    extraXXL: '64px',
  },
  transition: ['all 0.25s ease-in'],
  scale: ['scale(1.15)'],
};

export const darkMode = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    orange: '#9A4E00',
  },

  dark: {
    white: '#2D0116',
    black: '#FFFFFF',
    orange: '#FF8100',
  },
};

export default theme;
