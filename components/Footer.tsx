import React from 'react'
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 PawtnerUp. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://privacy-pets-website.deploypad.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="https://privacy-pets-website.deploypad.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
