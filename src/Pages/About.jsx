import React from 'react'

function About() {
  return (
    <>
        <div className='relative h-[250px] md:h-96 bg-cover bg-center' 
        style={{backgroundImage:"url('/Images/bghero3.jpg')"}}>
        <div className='absolute inset-0 bg-gray-700 bg-opacity-50 flex
            flex-col items-center justify-center'>
            <h3 className='text-6xl md:text-8xl 
            font-serif bg-gradient-to-r from-pink-900 via-fuchsia-800
            to-indigo-800 text-transparent bg-clip-text mb-4'
            >About Us</h3>
        </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <img src="/Images/bghero3.jpg" alt="" 
                className='rounded-lg shadow-md'/>
            </div>
            <div className="flex flex-col justify-center shadow-md">
              <h3 className='text-xl font-serif font-bold mb-2'>Who We Are</h3>
              <p className='text-gray-700 mb-4'>
                We are a passionated group of people who are intersted
                in exploring the world. This travel Agency is commited to 
                providing the best traveling experiences for our clients.
                Our team consist of dedicated proffesionals who are enthusiated
                in traveling the world. We ensure your trips are seamless and unforegattable.
              </p>
              <h3 className='text-xl font-serif font-bold mb-2'>Our Mission</h3>
              <p className='text-gray-700 mb-4'>
                Create amazing travel experiences that inspire and enrich the lives of 
                our clients.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default About