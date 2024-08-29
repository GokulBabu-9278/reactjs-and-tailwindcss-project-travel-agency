import React from 'react'

const images = [
  '/Images/paris.jpg',
  '/Images/bali.jpg',
  '/Images/nyc.jpg',
  '/Images/tokyo.jpg',
  '/Images/rome.jpg',
  '/Images/india.jpg',
  '/Images/dubai.jpg',
  '/Images/uk.jpg'
]

function Gallery() {
  return (
    <>
      <div className='relative h-[250px] md:h-96 bg-cover bg-bottom' 
        style={{backgroundImage:"url('/Images/bghero3.jpg')"}}>
        <div className='absolute inset-0 bg-gray-700 bg-opacity-50 flex
            flex-col items-center justify-center'>
            <h3 className='text-6xl md:text-8xl 
            font-serif bg-gradient-to-r from-pink-900 via-fuchsia-800
            to-indigo-800 text-transparent bg-clip-text mb-4'
            >Gallery</h3>
        </div>
      </div>
    <div className='container mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {images.map(image=>(
          <div className='rounded-lg overflow-hidden shadow-md
          transform transition duration-300 hover:scale-110'>
            <img src={image}
            className='w-full h-full object-covere'/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Gallery