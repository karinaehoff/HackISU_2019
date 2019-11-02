import React from 'react';
import { Route } from 'react-router';

// Custom Components
import Base from "./Base.js";
import NotFoundPage from './NotFoundPage';

const routes = (
    <Route path="/" component={Base}>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;