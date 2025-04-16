// public route
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { Component } from 'react';
import layouts, { HeaderOnly } from '~/layouts';
import config from '~/config';
import Signin from '~/pages/Signin';
import Budget from '~/pages/Budger';
import Saleofstate from '~/pages/Saleoffstate';
const publicRoutes = [
    { path: config.routes.home, Component: Home },
    { path: config.routes.budget, Component: Budget },
    { path: config.routes.profile, Component: Profile },
    { path: config.routes.upload, Component: Upload, layout: HeaderOnly },
    { path: config.routes.search, Component: Search, layout: null },
    { path: config.routes.saleoffstate, Component: Saleofstate },
    { path: config.routes.signin, Component: Signin, layout: null },
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };
