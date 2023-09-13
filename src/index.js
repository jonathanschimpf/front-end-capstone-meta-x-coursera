import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import ScrollToTop from './components/layout/ScrollToTop';
import reportWebVitals from './reportWebVitals';
import CustomRouter from './CustomRouter'; // CustomRouter Import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomRouter> {/* CustomRouter Component */}
      <ScrollToTop />
      <App />
    </CustomRouter>
  </React.StrictMode>
);

reportWebVitals();
