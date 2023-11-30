import "./App.css";

import {Suspense, useState} from "react";

import reactLogo from "./assets/react.svg";
import {ThemeModeProvider} from "./_metronic/partials/";
import {I18nProvider} from "./_metronic/i18n/i18nProvider";
import {LayoutProvider, LayoutSplashScreen} from "./_metronic/layout/core";
import {Outlet} from "react-router-dom";
import {MasterInit} from "./_metronic/layout/MasterInit";

function App() {
    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <I18nProvider>
                <LayoutProvider>
                    <ThemeModeProvider>
                        <Outlet/>
                        <MasterInit/>
                    </ThemeModeProvider>
                </LayoutProvider>
            </I18nProvider>
        </Suspense>
    );
}

export default App;
