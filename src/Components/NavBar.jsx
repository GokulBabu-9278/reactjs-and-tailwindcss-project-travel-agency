import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa6"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 
        bg-gradient-to-r from-slate-300 via-slate-500 to-gray-700'>
        <div className='conatiner px-4 flex justify-between items-center h-16 text-white'>
            <h3 className='text-2xl font-serif text-violet-600'>Travel</h3>
            <div className='hidden md:flex space-x-4 font-mono items-center'>
                <Link to='/' className='hover:bg-indigo-500 hover:text-gray-100
                px-6 py-2 rounded-full'>Home</Link>
                <Link to='/gallery' className='hover:bg-indigo-500 hover:text-gray-100
                px-6 py-2 rounded-full'>Gallery</Link>
                <Link to='/contact' className='hover:bg-indigo-500 hover:text-gray-100
                px-6 py-2 rounded-full'>Contact</Link>
                <Link to='/about' className='hover:bg-indigo-500 hover:text-gray-100
                px-6 py-2 rounded-full'>About</Link>
                <button className='px-6 py-2 rounded-xl
                bg-slate-100 text-black'>Login</button>
            </div>
            <div className='md:hidden'>
                <button onClick={()=> setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes/> : <FaBars/>}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-6 py-4
            flex-col bg-gradient-to-r from-slate-300 via-slate-500
            to-gray-700 font-mono items-center'>
            <Link to='/' className='hover:bg-indigo-500 hover:text-gray-100
            px-6 py-2 rounded-full'>Home</Link>
            <Link to='/gallery' className='hover:bg-indigo-500 hover:text-gray-100
            px-6 py-2 rounded-full'>Gallery</Link>
            <Link to='/contact' className='hover:bg-indigo-500 hover:text-gray-100
            px-6 py-2 rounded-full'>Contact</Link>
            <Link to='/about' className='hover:bg-indigo-500 hover:text-gray-100
            px-6 py-2 rounded-full'>About</Link>
            <button className='px-6 py-2 rounded-xl
            bg-slate-100 text-black'>Login</button>
            </div>
        )}
    </div>
  )
}

export default NavBar