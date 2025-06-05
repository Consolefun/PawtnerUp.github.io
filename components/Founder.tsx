import React from 'react'
const Founder = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          style={{
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          From the Founder
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div
              className="rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl"
              style={{
                width: '240px',
                height: '240px',
              }}
            >
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/1KkmZb8Z2b8kNoAor2CwCE/Founder_Pic.jpg"
                alt="William Hoang - Founder of PawtnerUp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <p className="text-lg text-gray-700 leading-relaxed">
              "As a lifelong pet lover, I created PawtnerUp to help our furry
              family members live their happiest, most social lives. My mission
              is to build a safe and joyful community for all pets and their
              parents."
            </p>
            <p className="text-lg font-semibold mt-4 text-blue-600">
              - William Hoang
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Founder
