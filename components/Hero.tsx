import React from 'react'
const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-5xl mx-auto relative">
  
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600"
            style={{
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            PawtnerUp: Find Your Pet's New Best Friend
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            The mobile app dedicated to creating joyful, safe, and social
            connections for pets and their people.
          </p>
          <div className="mt-10">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
