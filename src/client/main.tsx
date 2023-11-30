import "./index.css";

import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
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
import {QueryClient, QueryClientProvider} from "react-query";
import axios from "axios";

// export function setupAxios() {
//     axios.defaults.headers.Accept = 'application/json'
//     axios.interceptors.request.use(
//         (config: {headers: {Authorization: string}}) => {
//             const auth = undefined;
//             if (auth && auth.api_token) {
//                 config.headers.Authorization = `Bearer ${auth.api_token}`
//             }
//
//             return config
//         },
//         (err: any) => Promise.reject(err)
//     )
// }

// const {BASE_URL} = import.meta.env
const queryClient = new QueryClient()
const container = document.getElementById("root") as HTMLElement
if (container) {
    createRoot(container).render(
        <QueryClientProvider client={queryClient}>
            <MetronicI18nProvider>
                <AppRoutes>
                </AppRoutes>
            </MetronicI18nProvider>
        </QueryClientProvider>
    );
}

