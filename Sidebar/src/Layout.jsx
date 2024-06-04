import React from 'react'
import App from './App'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex'>
      <App />
      <Outlet />
    </div>
  )
}

export default Layout