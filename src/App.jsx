
import React from 'react';
import Navleft from './components/Nav/Navleft';
import Navright from './components/Nav/Navright';
import Cards from './components/Cards';
import Offercard from './components/Offercard';

const App = () => {
  
  return (
    
    <div className='h-screen m-w-screen '>
      <nav className='w-full h-[4vw] flex justify-end  '>
        <Navleft/>
        <Navright/>
      </nav>

        <Offercard/>
 <div class="max-w-screen-xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Exclusive Offers</h2>

   
    <div class="flex space-x-4 overflow-x-auto scrollbar-hide py-4">

      <div class="min-w-[300px] bg-blue-500 p-6 rounded-lg shadow-md text-white">
        <h3 class="text-xl font-semibold">50% Off on Electronics</h3>
        <p class="mt-2">Grab the best deals on your favorite gadgets!</p>
        <button class="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md font-bold">
          Shop Now
        </button>
      </div>

      <div class="min-w-[300px] bg-green-500 p-6 rounded-lg shadow-md text-white">
        <h3 class="text-xl font-semibold">Buy 1 Get 1 Free on Fashion</h3>
        <p class="mt-2">Exclusive offer on clothing and accessories.</p>
        <button class="mt-4 bg-white text-green-500 px-4 py-2 rounded-md font-bold">
          Grab Offer
        </button>
      </div>

      <div class="min-w-[300px] bg-red-500 p-6 rounded-lg shadow-md text-white">
        <h3 class="text-xl font-semibold">20% Cashback on Groceries</h3>
        <p class="mt-2">Save more on your daily essentials.</p>
        <button class="mt-4 bg-white text-red-500 px-4 py-2 rounded-md font-bold">
          Shop Groceries
        </button>
      </div>


    </div>
  </div>



        <Cards/>
    </div>
   
  )
}

export default App