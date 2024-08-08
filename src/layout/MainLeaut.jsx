import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLeaut({haritlar}) {
  return (
  <>
    <Navbar haritlar={haritlar}/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default MainLeaut