import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

 const Navbar = () => {
  const[nav, setNav] = useState(false);
   //function to change menu button to close or viceversa or it other words you can say if menu is not or displaying list then close it and change icon to close one or viceversa
  const handleNav = ()  => {
    setNav(!nav);
  }
  return (
    <div className='text-white flex items-center h-24 max-w-[1240px] mx-auto px-4  justify-between'>
    <img className='w-8 mr-3 rounded-3xl' src='https://c8.alamy.com/comp/2GH0HNF/green-blue-letter-b-logo-typography-logotype-letter-b-3d-colorful-icon-template-green-blue-gradient-b-monogram-character-abstract-typographic-2GH0HNF.jpg' alt='/'/>
       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BoloForms</h1>
       <ul className='flex hidden '>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resouces</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
       </ul>
       <div onClick={handleNav}>
       {/* if menu is not close  */}
       {!nav ? <AiOutlineClose size={20}  /> : <AiOutlineMenu size={20} />}
    

       </div>
       <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000] ease-in-out duration-500 ':'fixed left-[-100%]'}>
       <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BoloForms</h1>
        <ul className='p-4 uppercase '>
        <li className='p-4  border-b border-gray-100'>Home</li>
        <li className='p-4 border-b border-gray-100'>Company</li>
        <li className='p-4 border-b border-gray-100'>Resouces</li>
        <li className='p-4 border-b border-gray-100'>About</li>
        <li className='p-4 border-b border-gray-100'>Contact</li>
        </ul>
       </div>
    </div>
  )
}
export default Navbar;
