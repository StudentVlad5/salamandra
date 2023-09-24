import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { App } from 'components/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeStatus } from 'components/ThemeStatus/ThemeProvider';

// window.global = {
//   BASE_URL: 'http://localhost:3030/api',
//   BASE_URL_IMG: 'http://localhost:3030/uploads/',
// };
window.global = {
  BASE_URL: 'https://salamandrabackend.studentvlad5.repl.co/api',
  BASE_URL_IMG: 'https://salamandrabackend.studentvlad5.repl.co/uploads/',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading'} persistor={persistor}>
        <BrowserRouter basename="salamandra">
          <ThemeStatus>
            <GlobalStyle />
            <App />
          </ThemeStatus>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
