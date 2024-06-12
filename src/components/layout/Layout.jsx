import React from 'react'
import LayoutNav from '../layoutNav/LayoutNav'
import './Layout.css'
import LayoutFooter from '../layoutFooter/LayoutFooter'

const Layout = ({ children }) => {
  return (
    <>
      <LayoutNav />
      {children}
      <LayoutFooter />
    </>
  )
}

export default Layout