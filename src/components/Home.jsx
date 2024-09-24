import React from 'react'
import Navleft from "./Nav/Navleft"
import Navright from "./Nav/Navright"
import Offercard from './Offercard'
import Seasonaloffer from './Seasonaloffer'
import Cards from "./Cards"
import Footer from './Footer'

const Home = () => {
  return (
   <>
    <nav className='w-full h-[4vw] flex justify-end  '>
        <Navleft/>
        <Navright/>
      </nav>
        <Offercard/>
        <Seasonaloffer/>
        <Cards/>
        <Footer/>
   </>
  )
}

export default Home