import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BgImage from "./assets/bg.png"
import Equipments from './components/Equipments/Equipments';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};


const App = () => {
  return (
    <div>
      <h1 className="overflow-x-hidden">
        <div style={bgStyle}>
          <Navbar />
          <Hero />
        </div>
        <Equipments />
      </h1></div>
  )
}

export default App