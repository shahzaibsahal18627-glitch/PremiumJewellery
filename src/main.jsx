import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// During development, allow opening the app at /Premium-Jewellery/* URLs
// by stripping the production base path so routes match the dev server.
if (import.meta.env.DEV) {
  const prodBase = '/Premium-Jewellery';
  if (window.location.pathname.startsWith(prodBase)) {
    const newPath = window.location.pathname.replace(prodBase, '') || '/';
    window.history.replaceState({}, '', newPath + window.location.search + window.location.hash);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
