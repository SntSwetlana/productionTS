import React, {Suspense, useContext, useState} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Link} from "react-router-dom";
import './styles/index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import ThemeProvider from "./theme/ThemeProvider";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    const bool = true;

    return (
        <div className = {classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Router>
                <Link to={'/'}>Main</Link>
                <Link to={'/about'}>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path = {`/about`} element={<AboutPageAsync/>}/>
                        <Route path = {`/`} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default App
