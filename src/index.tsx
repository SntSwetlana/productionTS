import React from 'react';
import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
