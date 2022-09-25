import React, { Suspense } from "react";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widjets/Navbar";
import {AppRouter} from "app/providers/router";
import {Sidebar} from "widjets/Sidebar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className = {classNames('app',{},[theme])}>
            <Suspense fallback = "">
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
export default App
