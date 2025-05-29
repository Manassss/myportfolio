import React, { useEffect } from 'react';
 import { BrowserRouter as Router } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Home from './pages/Home';
import homeGif from './assests/home.gif';

const App = () => {
  useEffect(() => {
    // Create a link element for the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = homeGif;
    document.head.appendChild(link);

    // Clean up when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="app-container">
              <Header />
              <Home />
            </div>
          </Router>
        </ThemeProvider>
       );
     };

export default App;
