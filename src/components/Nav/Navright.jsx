import { useState } from "react";

const Navright = () => {
const [query , setquery] =useState("");
  return (
    <div className='w-1/2 h-[10vh] relative flex justify-start items-center ml-[2%]'>
    <i class="text-2xl text-zinc-400 ri-search-2-line mr-10"></i>
    <input
      onChange={(e) => setquery(e.target.value)}
      value={query}
      className='w-[60%] mr-10 p-2 text-xl outline-none bg-transparent text-zinc-400'
      type="text" 
      placeholder='search anything' />
      {query.length>0 &&  
    <i 
    onClick={() => setquery("")}
  
    class="text-3xl text-zinc-400 ri-close-fill"></i>}
 
  <div className='w-[60%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto'>
    {/* <Link className='font-semibold hover:text-zinc-950 text-zinc-600 inline-block w-[100%] p-8 flex justify-start items-center border-b-2 border-zinc-100 hover:bg-zinc-100 duration-300'>
    <img src="" alt="" />
    <span>Hello Everyone</span>
    </Link> */}

  </div>
</div>
  )
}

export default Navright