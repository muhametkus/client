import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IndexPage from '../components/IndexPage'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <IndexPage/>
        <Footer/>
    </div>
  )
}

export default HomePage