import React from 'react'
import MainHeader from '../MainHeader'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div>
        <MainHeader/>
        <Outlet />
    </div>
  )
}

export default RouteLayout