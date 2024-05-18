// import React from 'react'

import About from "./components/About"
import Agenda from "./components/Agenda"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="bg-gray-light">
      <Header/>
      <Hero/>
      <About/>
      <Agenda/>
    </div>
  )
}

export default App
