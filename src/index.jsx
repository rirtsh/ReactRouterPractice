import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <script src="./bundle.js"></script>
    <App />
  </React.StrictMode>
);