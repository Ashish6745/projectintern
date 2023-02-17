import React from 'react'
import chats from '../assets/chats.svg'
import chats2 from '../assets/chats2.svg'
import chats3 from '../assets/chats3.svg'

function Functions() {
  return (
    <div className=' w-full py-[10rem] px-4 bg-white text-center'>
       <h1 className='text-black uppercase px-40 font-bold text-3xl '>How does BoloForms work?</h1>
       <p className='text-xl  mt-3 text-[#00df3a]'>Set up your first workflow in just 3 easy steps.</p>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-12'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-full h-full mx-auto mt-[-3rem] bg-gray-200' src={chats} alt="/" />
             <h2 className='font-bold text-2xl font-sans'>Step 1:</h2>
             <p className='font-serif text-xl'>Choose a template or add questions to create your Google Form.</p>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-gray-200 mx-auto mt-[-3rem] bg-transparent' src={chats2} alt="/" />
              <h2 className='font-bold text-2xl font-sans'>Step 2:</h2>
             <p className='font-serif text-xl'>Enable Single/Multi Step approval and add necessary approvers!</p>
             
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-gray-200 mx-auto mt-[-3rem] bg-transparent' src={chats3} alt="/" />
              <h2 className='font-bold text-2xl font-sans'>Step 3:</h2>
             <p className='font-serif text-xl'>Now you can enable the workflow and share the Google Form.</p>
          </div>
      </div>
    </div>
  )
}

export default Functions
