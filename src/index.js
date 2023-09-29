import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { App } from 'components/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeStatus } from 'components/ThemeStatus/ThemeProvider';

window.global = {
  BASE_URL: 'https://salamandra-backend.onrender.com/api',
  BASE_URL_IMG: 'https://salamandra-backend.onrender.com/uploads/',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading'} persistor={persistor}>
        <BrowserRouter basename="/">
        {/* <BrowserRouter basename="salamandra"> */}
          <ThemeStatus>
            <GlobalStyle />
            <App />
          </ThemeStatus>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
