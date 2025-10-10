import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Details from '../pages/Details/Details';
import Installation from '../pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            loader: () => fetch('/trendingApps.json'),
            Component: Home,
        },
        {
            path: "/apps",
            loader: () => fetch('/apps.json'),
            Component: Apps
        },
        {
            path: "/installation",
            loader: () => fetch('/apps.json'),
            Component: Installation
        },
        {
            path: "/details/:id",
            loader: () => fetch('/apps.json'),
            Component: Details
        }
    ]
  },
]);