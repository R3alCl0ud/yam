import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../App";
import React, {FC} from "react";
import {PrivateRoutes} from "./PrivateRoutes";
import {ErrorsPage} from "../modules/errors/ErrorsPage";


const AppRoutes: FC = () => {
    const {BASE_URL} = import.meta.env

return (
    <BrowserRouter basename={BASE_URL}>
        <Routes>
            <Route element={<App/>}>
                <Route path='error/*' element={<ErrorsPage />} />
                {/*<Route index element={<DashboardWrapper/>}/>*/}
                <>
                    <Route path='/*' element={<PrivateRoutes />} />
                    <Route index element={<Navigate to='/dashboard' />} />
                </>
            </Route>
        </Routes>
    </BrowserRouter>);
}

export {AppRoutes}