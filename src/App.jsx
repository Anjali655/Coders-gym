import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <h1 className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </h1></div>
  )
}

export default App