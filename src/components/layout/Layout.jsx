import React from 'react'
import LayoutNav from '../layoutNav/LayoutNav'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
    <LayoutNav/>
    {children}
    </>
  )
}

export default Layout