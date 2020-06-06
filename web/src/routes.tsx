import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} exact path="/" />
            <Route component={CreatePoint} exact path="/cadastro" />
        </BrowserRouter>
    );
};

export default Routes;