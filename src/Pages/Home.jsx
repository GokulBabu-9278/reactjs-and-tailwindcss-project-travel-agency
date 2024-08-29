import React from 'react'
import PopularDestination from '../Components/PopularDestination'
import Services from '../Components/Services'
import Client from '../Components/Clients'

function Home() {
  return (
  <>
    <div className='relative h-[500px] md:h-screen bg-cover bg-center' 
    style={{backgroundImage:"url('/Images/bghero3.jpg')"}}>
        <div className='absolute inset-0 bg-gray-700 bg-opacity-50 flex
            flex-col items-center justify-center'>

            <h1 className='text-6xl md:text-8xl 
            font-serif bg-gradient-to-r from-pink-900 via-fuchsia-800
            to-indigo-800 text-transparent bg-clip-text mb-4'
            >Explore the world with Us</h1>

            <p className='text-lg md:text-2xl bg-gradient-to-r
             from-blue-900 via-red-900 to-violet-900 text-transparent 
             bg-clip-text mb-6 font-semibold'
             >Discover amazing places at exclusive deals</p>

            <button className='border text-white hover:bg-slate-100
            px-6 py-2 rounded-full text-lg md:text-xl transform transition 
            duration-300 hover:scale-110 hover:text-violet-600 border-violet-600
            '>Get Started</button>
        </div>
    </div>
    <PopularDestination/>
    <Services/>
    <Client/>
  </>
  )
}

export default Home