import React from 'react'
import { Footer, Blog, Possibility, Features, WhatYAMICS, Header } from "./containers"
import { Cta, Brand, Navbar } from "./components"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <section className='gradient-bg'>
        <Navbar />
        <Header />
      </section>
      <Brand />
      <WhatYAMICS />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App