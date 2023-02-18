import React from 'react'


function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <iframe loading="lazy" class="w-[560px] h-[315px] md:w-[460px] lg:w-[560px] border-4 rounded-2xl border-[#9a6afd]" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
           
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Transform Google Forms Into Interactive Workflows</h1>
              <p className=''>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
               
              <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>
              Get Started
              </button>
            </div>
         </div>
    </div>
  )
}

export default Analytics
