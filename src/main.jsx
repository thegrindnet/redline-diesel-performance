import React from 'react';
import { createRoot } from 'react-dom/client';
import './vendor/normalize.css';
import './index.css';
import App from './components/App/App.jsx';
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
