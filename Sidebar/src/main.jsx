import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'
import Home from './Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="main" >
        <Route path="" element={<Home />} />
        <Route path="1" element={<Page1 />} />
        <Route path="2" element={<Page2 />} />
        <Route path="3" element={<Page3 />} />
      </Route>

      <Route path="users" >
        <Route path="" element={<Home />} />
        <Route path="1" element={<Page1 />} />
        <Route path="2" element={<Page2 />} />
        <Route path="3" element={<Page3 />} />
      </Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
