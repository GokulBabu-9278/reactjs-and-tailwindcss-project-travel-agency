import React from 'react'
import { MdFlight } from "react-icons/md"
import { FaHotel } from "react-icons/fa"
import { FaUmbrellaBeach } from "react-icons/fa"
import { FaConciergeBell } from "react-icons/fa"

const services = [
    {
    icon: <MdFlight className='text-5xl text-slate-700'/> , 
    title:'Flight Booking',
    description:'We provide easy and quick flight booking services to make your trip hassle-free'
    },
    {
    icon: <FaHotel className='text-5xl text-slate-700'/>, 
    title:'Hotel Booking',
    description:'Book hotels at the best prices with our exclusive deals and discount'
    },
    {
    icon: <FaUmbrellaBeach className='text-5xl text-slate-700'/>,
    title:'Beach Tour',
    description:'Enjoy relaxing beach tours with all-inclusive packages and guided tours'
    },
    {
    icon: <FaConciergeBell className='text-5xl text-slate-700'/>, 
    title:'Concierge Services',
    description:'Get personalised concierge services for a seamless travel experience'
    },
] 

function Services() {
  return (
    <div className='bg-slate-300 py-12'>
        <div className="container mx-auto px-4">
            <h3 className='text-4xl font-serif text-center mb-9'>Services</h3>
            <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service, index)=>(
                    <div key={index} className='bg-white rounded-xl
                    shadow-md cursor-pointer flex flex-col p-7 items-center
                    hover:scale-110 transform transition duration-200'>
                        <div className='mb-4'>{service.icon}</div>
                        <h4 className='text-xl font-bold mb-2'>{service.title}</h4>
                        <p className='text-sm text-gray-700'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services