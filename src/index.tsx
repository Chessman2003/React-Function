import React from 'react';
import App from './App/App';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(<App />);