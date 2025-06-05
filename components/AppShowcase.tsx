import React from 'react'
const AppShowcase = () => {
  // App screenshots
  const appScreenshots = [
    {
      id: 1,
      src: 'https://uploadthingy.s3.us-west-1.amazonaws.com/uFdMwnUeQ9RUxwmtsojTE6/Home-Page.jpg',
      alt: 'PawtnerUp Home Page',
    },
    {
      id: 2,
      src: 'https://uploadthingy.s3.us-west-1.amazonaws.com/fQoSiroFkGPJWqsHmPMwjj/Event-Page.jpg',
      alt: 'PawtnerUp Event Page',
    },
    {
      id: 3,
      src: 'https://uploadthingy.s3.us-west-1.amazonaws.com/sauYmDftTL6KMvWZckpbJN/Chat-Page.jpg',
      alt: 'PawtnerUp Chat Page',
    },
    {
      id: 4,
      src: 'https://uploadthingy.s3.us-west-1.amazonaws.com/jtz8qGvhtQrXuwd1cjfTgj/User-Profile.jpg',
      alt: 'PawtnerUp User Profile',
    },
    {
      id: 5,
      src: 'https://uploadthingy.s3.us-west-1.amazonaws.com/kmyz2D8sALBut8cfZe6sLN/Pet-Profile.jpg',
      alt: 'PawtnerUp Pet Profile',
    },
  ]
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          style={{
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Explore the App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appScreenshots.map((screenshot) => (
            <div key={screenshot.id} className="flex justify-center">
              <div className="bg-gray-100 p-2 rounded-3xl shadow-md overflow-hidden">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto rounded-2xl"
                  style={{
                    maxWidth: '280px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            PawtnerUp makes it easy to find and organize pet meetups, chat with
            other pet owners, and create a profile for your furry friend.
          </p>
        </div>
      </div>
    </section>
  )
}
export default AppShowcase
