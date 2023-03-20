import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import App from "../src/components/app/app"
import ErrorPage from "./error-page";
import CoffeeHouse from './components/coffee-house/coffee-house';
import OurCoffee from './components/our-coffee/our-coffee';
import Pleasure from './components/pleasure/pleasure';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/coffee-house",
    element: <CoffeeHouse />,
  },
  {
    path: "/our-coffee",
    element: <OurCoffee />,
  },
  {
    path: "/pleasure",
    element: <Pleasure />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

