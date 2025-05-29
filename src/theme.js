import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#9b4886', dark: '#7a3668', light: '#c08497' },
    background: { default: '#000000', paper: '#ffffff' },
    text: { primary: '#222222', secondary: '#555555' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontFamily: 'Playfair Display, serif' },
    h2: { fontFamily: 'Playfair Display, serif' },
    h3: { fontFamily: 'Playfair Display, serif' },
    body1: { fontFamily: 'Inter, sans-serif' },
    body2: { fontFamily: 'Inter, sans-serif' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { overflowX: 'hidden' },
        body: { margin: 0, padding: 0, backgroundColor: '#000' },
      },
    },
  },
});

export default theme;