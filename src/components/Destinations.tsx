
import React from 'react';
import RishikeshImg from '../assets/rishikesh.jpg';
import KedarnathImg from '../assets/kedarnath.jpg';

const destinations = [
    {
      name: "Nainital",
      description: "A beautiful lake town nestled in the Kumaon hills.",
      image:
        "https://media.istockphoto.com/id/471622053/photo/lake-in-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=jUNzGKRKZOwadhaM7asCvPBUlmTjCDwYXTp6V_oZd7A=",
    },
    {
    name: "Rishikesh",
    description: "Yoga capital of the world with river rafting adventures.",
    image: RishikeshImg,
  },
  {
    name: "Kedarnath",
    description: "Sacred Himalayan temple surrounded by majestic peaks.",
    image: KedarnathImg,
  },
  ];
  

const Destinations = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Popular Destinations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-600 mb-4">{place.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
