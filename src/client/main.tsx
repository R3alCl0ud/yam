import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'

import App from "./App.js";
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n.js'
import {AppRoutes} from "./routes/AppRoutes";

import './_metronic/assets/sass/style.react.scss'
import './_metronic/assets/fonticon/fonticon.css'
import './_metronic/assets/keenicons/duotone/style.css'
import './_metronic/assets/keenicons/outline/style.css'
import './_metronic/assets/keenicons/solid/style.css'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'

// const {BASE_URL} = import.meta.env

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <MetronicI18nProvider>
        <AppRoutes>
        </AppRoutes>
      </MetronicI18nProvider>
  </React.StrictMode>,
);
