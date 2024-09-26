import React, { useEffect, useState } from 'react';
import Navleft from "./Nav/Navleft";
import Navright from "./Nav/Navright";
import Offercard from './Offercard';
import Seasonaloffer from './Seasonaloffer';
import Cards from "./Cards";
import Footer from './Footer';
import axios from '../utils/Axios';

const Home = ({ isLoggedIn, setIsLoggedIn }) => { // Receiving isLoggedIn and setIsLoggedIn as props
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      const { data } = await axios.get(`/user`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <nav className='w-full h-[4vw] flex justify-end'>
        <Navleft />
        {/* Pass isLoggedIn and setIsLoggedIn to Navright */}
        <Navright isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </nav>
      <Offercard />
      <Seasonaloffer />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
