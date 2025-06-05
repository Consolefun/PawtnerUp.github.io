import React, { Component } from 'react'
// Components
import Hero from './components/Hero'
import AppShowcase from './components/AppShowcase'
import Founder from './components/Founder'
import Footer from './components/Footer'
export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <main className="flex-grow">
        <Hero />
        <AppShowcase />
        <Founder />
      </main>
      <Footer />
    </div>
  )
}
