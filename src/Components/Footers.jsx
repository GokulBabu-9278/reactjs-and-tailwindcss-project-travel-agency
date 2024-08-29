import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gradient-to-r from-pink-800 via-fuchsia-800
            to-indigo-800 p-4 text-white'>
        <div className='container mx-auto px-4 mb-2'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className=''>
                <h2 className='text-2xl font-serif mb-4'>Travel Agency</h2>
                <p className='font-thin'>Your trusted partner for unforgettable travel experience.
                    Explore the world with us.
                </p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h2 className='text-xl font-semibold'>Quick Links</h2>
                <div className='flex flex-col mt-4 space-y-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
            <div>
                <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
                <div className='flex space-x-4 mb-4 cursor-pointer'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaTelegramPlane/>
                </div>
                <form action="">
                    <input 
                        type="email" 
                        placeholder='@gmail.com'
                        className='w-56 p-2 rounded-l-3xl justify-center mt-8
                        bg-transparent border-t border-b border-l border-blue-700'/>
                    <button className='bg-gradient-to-r
                    from-blue-900 to-indigo-900 rounded-r-3xl text-white
                    px-4 py-2 border-blue-700'>Subscribe</button>
                </form>
            </div>
        </div>
        </div>
        <div className='flex justify-between border-t border-gray-500 pt-4'>
            <p className=''>© 2024 Travel Agency. All rights reserved.</p>
            <div className='flex space-x-4 mt-3 md:mt-0'>
                <Link to='/privaypolicy'>Privay Policy</Link>
                <Link to='/terms'>Terms of Services</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer