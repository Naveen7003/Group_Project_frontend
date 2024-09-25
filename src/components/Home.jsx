import React, { useEffect, useState } from 'react'
import Navleft from "./Nav/Navleft"
import Navright from "./Nav/Navright"
import Offercard from './Offercard'
import Seasonaloffer from './Seasonaloffer'
import Cards from "./Cards"
import Footer from './Footer'
import axios from '../utils/Axios'

const Home = () => {
  const [data, setdata] = useState('');
 
  const getdata =  async() =>{
    try {
      const {data} = await axios.get(`/user`);
      setdata(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getdata()
  },[])
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