import React from 'react';
import bh from '../assets/bh.svg'
import bol from '../assets/bol.svg'
import lo from '../assets/lo.svg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-full h-full mx-auto mt-[-3rem] bg-gray-200' src={bh} alt="/" />
            
              <button className='bg-[#00df3a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>HubSpot</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-gray-200 mx-auto mt-[-3rem] bg-transparent' src={bol} alt="/" />
            
              <button  className='bg-[#00df3a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Uber</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-gray-200 mx-auto mt-[-3rem] bg-transparent' src={lo} alt="/" />
            
              <button  className='bg-[#00df3a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Crumbl</button>
          </div>
      </div>
    </div>
    
  );
};

export default Cards;