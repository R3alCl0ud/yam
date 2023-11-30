import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from "../_metronic/layout/MasterLayout";
import {DashboardWrapper} from "../pages/Dashboard";

const PrivateRoutes = () => {
return (
    <Routes>
        <Route element={<MasterLayout />}>
            <Route path='dashboard' element={<DashboardWrapper />} />
            <Route path='*' element={<Navigate to='/error/404' />} />
        </Route>
    </Routes>
);
};

export {PrivateRoutes}