import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
export default function Layout() {
  return (
    <div className="w-full min-h-screen flex">
        <Navigation/>
        <Outlet/>
    </div>
  )
}
 