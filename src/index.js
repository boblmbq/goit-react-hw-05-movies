import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

const theme = Object.freeze({
  colors: {
    headerBack: '#565656',
    pageLinkBack: '#707070',
    inputSearch: '#707070',
    movieCartBack: '#707070',
    fontColor: '#fff',
  },
  countSize(n) {
    return `${Math.round(n * 4)}px`;
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-movie">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
