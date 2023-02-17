import React from 'react'
import Rocket from '../assets/rocket.svg'
import Multi from '../assets/multi.svg'
import Dashboard from '../assets/dashboard.svg'
import Clicks from '../assets/clicks.svg'
import Condition from '../assets/condition.svg'
import user from '../assets/user.svg'
import response from '../assets/response.svg'
import setting from '../assets/setting.svg'

function Table() {
  return (
    <div className='bg-white w-full flex '>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={Rocket} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={Multi} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={Dashboard} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={user} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={setting} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={response} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={Clicks} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={Condition} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-16 ml-0 h-16 mx-auto mt-[-3rem]' src={user} alt="/" />
            
              <p className='text-3xl font-bold font-mono mt-1 text-black'>Get started in less than 5 minutes.</p>
             <p className='text-xl mt-4'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made</p>
          </div>

         
      </div>
    </div>
  )
}

export default Table
