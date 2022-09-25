import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import 'app/styles/index.scss'
import ThemeProvider, {ThemeProviderProps} from "app/providers/ThemeProvider/ui/ThemeProvider";
import {BrowserRouter} from "react-router-dom";

import  "./shared/config/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);


