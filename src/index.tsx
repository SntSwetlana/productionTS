import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider, { ThemeProviderProps } from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
