import React from 'react'

const destination = [
    {image:'/Images/paris.jpg', title:'Paris, France',
         description:'European city and a global center for art, fashion, gastronomy and culture. Landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.'},
    {image:'/Images/bali.jpg', title:'Bali, Indonesia',
         description:'Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. A few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.'},
    {image:'/Images/nyc.jpg', title:'New York, USA',
         description:"A densely populated borough that's among the world's major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square."},
    {image:'/Images/tokyo.jpg', title:'Tokyo, Japan',
         description:'Ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.'},
] 

function PopularDestination() {
  return (
    <div className='bg-slate-300 py-12'>
        <div className="container mx-auto px-4">
            <h3 className='text-4xl font-serif text-center mb-9'>Popular Destinations</h3>
            <div className="gap-4 grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3">
                {destination.map((city, index)=>(
                    <div key={index} className='bg-white rounded-xl
                    shadow-md overflow-hidden cursor-pointer'>
                        <img src={city.image} alt={city.title}
                        className='w-full h-32 object-cover transform
                        transition duration-300 hover:scale-110'/>
                        <div className='p-4'>
                            <h4 className='text-xl font-bold mb-2'>{city.title}</h4>
                            <p className='text-sm text-gray-700'>{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PopularDestination