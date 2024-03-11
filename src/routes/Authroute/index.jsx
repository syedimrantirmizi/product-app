import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Authroute = () => {
  return !localStorage.getItem("uid") ? <Outlet/> : <Navigate to={"/"}/>
}

export default Authroute