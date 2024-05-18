// import React from 'react'

import About from "./components/About"
import Agenda from "./components/Agenda"
import Countdown from "./components/Countdown"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  // Set the event date to September 28, 2024, at 6:00 AM UTC which is equivalent to 28th September 2024 East African Time 9 am
  const eventDate = new Date('2024-09-28T06:00:00Z');

  return (
    <div className="bg-gray-light">
      <Header/>
      <Hero/>
      <About/>
      <Agenda/>
      <Countdown eventDate={eventDate}/>
    </div>
  )
}

export default App
