import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router';
import App from './App';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
    {
      path: '/',
      element:<App />,
      children:[
        {
           path:'/',
           element:<Home/>,
       },
       {
        path:'/login',
        element:<Login/>,
       },
       {
        path:'/signup',
        element:<Signup />
       },
       {
        path:'/about',
        element:<About />
       },
       {
        path:'/contact',
        element:<Contact/>
       },
       {
         path:'/dashboard',
         element:<PrivateRoute> <Dashboard /></PrivateRoute >
         
       }
     
  ]}
])

const root=createRoot(document.getElementById("root"));
root.render(<><RouterProvider router={router} /> <Toaster /></>)

