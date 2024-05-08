import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <main className='inter-font'>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout