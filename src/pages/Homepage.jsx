import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Home/Header'
import WhatWeDo from '../components/Home/WhatWeDo'
import Service from '../components/Home/Service'
import Who from '../components/Home/Who'
import Book from '../components/Home/Book'
import Footer from '../components/Footer/Footer'
import ClientTestimonial from '../components/Home/ClientTestimonial'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <WhatWeDo/>
        <Service/>
        <Who/>
        <Book/>
        <ClientTestimonial/>
        <Footer/>
    </div>
  )
}

export default Homepage