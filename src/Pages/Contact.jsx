import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <div className='bg-gray-200'>
        <div className='relative h-[250px] md:h-96 bg-cover bg-top' 
        style={{backgroundImage:"url('/Images/bghero3.jpg')"}}>
        <div className='absolute inset-0 bg-gray-700 bg-opacity-50 flex
            flex-col items-center justify-center'>
            <h3 className='text-6xl md:text-8xl 
            font-serif bg-gradient-to-r from-pink-900 via-fuchsia-800
            to-indigo-800 text-transparent bg-clip-text mb-4'
            >Contact Us</h3>
        </div>
        </div>
        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                    <div className='flex items-center mb-4'>
                        <FaEnvelope className='text-blue-500 mr-2'/>
                        <p>info@travelagency.com</p>
                    </div>
                    <div className='flex items-center mb-4'>
                        <FaPhone className='text-blue-500 mr-2'/>
                        <p>+123 456 7890</p>
                    </div>
                    <div className='flex items-center mb-4'>
                        <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                        <p>123 Travel St, City, Country </p>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-xl p-6'>
                    <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                    <form>
                        <div className='mb-4'>
                            <label htmlFor="Name"
                            className='block text-gray-700 mb-2'
                            >Name</label>
                            <input type="text" placeholder='Enter Name'
                            className='w-full border border-gray-300 rounded'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Email" 
                            className='block text-gray-700 mb-2'
                            >Email</label>
                            <input type="email" placeholder='@gmail.com'
                            className='w-full border border-gray-300 rounded'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Message"
                            className='block text-gray-700 mb-2'
                            >Message</label>
                            <textarea type="text" placeholder='Write Message'
                            className='w-full p-2 border border-gray-300 rounded'/>
                        </div>
                        <button type='submit'
                        className='py-2 px-4 bg-gradient-to-r from-pink-900 
                        via-fuchsia-800 to-indigo-800 text-white rounded-3xl'
                        >Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact