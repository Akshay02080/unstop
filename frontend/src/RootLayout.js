import React from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div >
        <NavigationBar/>
        <div style={{minHeight:"50rem",maxWidth:"100vw"}}>
        <Outlet />
        </div>
        
        <Footer/>
    </div>
  )
}

export default RootLayout