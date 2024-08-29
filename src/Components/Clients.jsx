import React from 'react'

const client = [
    {
        name:'John Doe',
        image:'/Images/client1.jpg',
        text:'This travel agency proivided excellent service and helped us plan the perfect vacation for our family',
        location:'New York, USA'
    },
    {
        name:'Jaine Smith',
        image:'/Images/client2.jpg',
        text:'Amazing experience! The tour guides were knowlegeable and the destinations were breathtaking',
        location:'London, UK'
    },
    {
        name:'Adan John',
        image:'/Images/client3.jpg',
        text:'Great customer service and fantastic travel packages. Will definitely book with them again',
        location:'Sydney, Australia'
    }
] 

function Client() {
  return (
    <div className='bg-slate-300 py-12'>
        <div className="container mx-auto px-4">
            <h3 className='text-4xl font-serif text-center mb-9'>What our Clients say</h3>
            <div className="gap-4 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {client.map((client, index)=>(
                    <div key={index} className='bg-white rounded-xl
                    shadow-md cursor-pointer flex flex-col p-6 items-center
                    hover:scale-110 transform transition duration-200'>
                        <img src={client.image} alt="img" 
                        className='w-24 h-24 rounded-full mx-auto mb-4'/>
                        <h4 className='text-xl font-bold mb-2'>{client.name}</h4>
                        <p className='text-sm text-gray-700'>{client.location}</p>
                        <p className='text-sm text-gray-700 italic'>{client.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Client