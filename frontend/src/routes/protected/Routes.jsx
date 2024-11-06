import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES_CONST } from '../../constant/routeConstant';
import Home from '../../page/Home';
import Protected from './Protected.jsx'
function RoutesComp() {
    return (
        <Routes>
            {/* <Route
                path={ROUTES_CONST.INDEX}
                element={<Protected Component={Home} />}
            /> */}
            <Route
                path={ROUTES_CONST.INDEX}
                element={< Home />}
            />
        </Routes>
    )
}

export default RoutesComp