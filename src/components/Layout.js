import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Services from './Services'
import Trusted from './Trusted'
const Layout = ({children}) => {
  return (
    <div>
      <Nav/>
      {children}
      <Services/>
      <Trusted/>
      <Footer/>
    </div>
  )
}

export default Layout
