import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import About from './Components/About.jsx'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'
import AuthProviders from './Authproviders/AuthProviders.jsx'
import Private from './Components/Private.jsx'
import Checkout from './Components/Checkout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/checkout',
        element:<Private><Checkout></Checkout></Private>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
  </AuthProviders>
   
)
