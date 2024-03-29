import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import HTML from './pages/html';
import Css from './pages/css';
import Javascript from './pages/Javascript';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORRY .........</h1>
  },
  {
    path: "/Html",
    element: <HTML />,
    errorElement: <h1>SORRY .........</h1>
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1>SORRY .........</h1>
  },
  {
    path: "/Javascript",
    element: <Javascript />,
    errorElement: <h1>SORRY .........</h1>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


