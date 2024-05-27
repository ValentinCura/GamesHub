import React from 'react'
import LayoutNav from '../layoutNav/LayoutNav'
import './Layout.css'
import LayoutFooter from '../layoutFooter/LayoutFooter'

const Layout = ({ children }) => {
  return (
    <div className='layoutGrid'>
      <LayoutNav />
      {children}
      <LayoutFooter />
    </div>
  )
}

export default Layout