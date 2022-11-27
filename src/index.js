import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './redux/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="796638206481-17fhi5n9vk3c7sed08j8shj17n44gm9p.apps.googleusercontent.com">
       <Provider store={store}>
         <App />
       </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

