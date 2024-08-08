import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalContextProvider } from './context/GlobalContext';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.zoom = '90%';
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GlobalContextProvider>
);
